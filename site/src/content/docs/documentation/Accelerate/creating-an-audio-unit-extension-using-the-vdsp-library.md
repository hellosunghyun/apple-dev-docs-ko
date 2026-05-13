---
source_path: "documentation/Accelerate/creating-an-audio-unit-extension-using-the-vdsp-library.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/creating-an-audio-unit-extension-using-the-vdsp-library"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:creating-an-audio-unit-extension-using-the-vdsp-library:0000:0001">Creating an audio unit extension using the vDSP library</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-unit-extension-using-the-vdsp-library:0001:0001">**Framework**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-unit-extension-using-the-vdsp-library:0002:0001">Add biquadratic filter audio-effect processing to apps like Logic Pro X and GarageBand with the Accelerate framework.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-unit-extension-using-the-vdsp-library:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-audio-unit-extension-using-the-vdsp-library:0004:0001">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:creating-an-audio-unit-extension-using-the-vdsp-library:0004:0002">Xcode 15.1+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">An audio unit extension provides a way to create or modify audio and MIDI data in an iOS or macOS app that uses sound — including music-production apps.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">It contains the audio unit and, optionally, a user interface to control the audio unit.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0003">The audio unit is a custom plug-in where you generate audio or implement an audio-processing algorithm.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">You can shape the output of an audio signal, such as by boosting or cutting the bass or treble of a music track, with the single-channel and multichannel biquadratic filters that the vDSP library provides.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md">@@TOKEN_0@@</a> 속성 값을 <a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md">@@TOKEN_1@@</a>로 설정할 때, fallback 카메라 선택을 허용하는 조건을 제어하려면 이 상수를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">하나 이상의 조건이 활성화되어 트리거되면 대체 카메라 전환은 노출과 초점이 안정화될 때까지 대기한 뒤 primary constituent device로 어떤 카메라를 사용할지 결정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md">@@TOKEN_0@@</a>가 제한된 전환 동작 조건에 포함되지 않은 경우에도 <a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md">@@TOKEN_1@@</a>는 비디오 줌 팩터 변경으로 카메라가 <a href="avcapturedevice/activeprimaryconstituent.md">@@TOKEN_2@@</a>로 선택되거나 선택 대상에서 제외되는 경우 카메라 선택을 허용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">You can use the code in this project as the basis for writing audio units that use the <a href="vdsp.md">@@TOKEN_0@@</a> library.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">비디오 줌 팩터가 활성 primary constituent device의 전환 임계 줌 팩터보다 낮아지면 시스템은 요청된 줌 팩터를 충족하기 위해 다른 카메라를 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0002">This type of audio unit accepts an audio input and produces an audio output.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0003">The template provides an audio pass-through effect with a signal parameter to adjust the gain of the audio that passes through the audio unit.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0001">비디오 줌 팩터가 증가해 카메라의 전환 임계 줌 팩터를 넘으면 이 카메라는 <a href="avcapturedevice/activeprimaryconstituent.md">@@TOKEN_0@@</a>로 설정할 수 있는 자격을 갖습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:add-a-new-parameter-address:0013:0001">Add a New Parameter Address</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-a-new-parameter-address:0014:0001">The peaking EQ filter requires three parameters: the center frequency, the Q value (which controls the shape of the response curve), and the decibel gain.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-a-new-parameter-address:0015:0001">The code below adds enumeration cases for the parameters to the <code>vDSP_audio_unitExtensionParameterAddresses.h</code> header:</span>

```objective-c
typedef NS_ENUM(AUParameterAddress, vDSP_audio_unitExtensionParameterAddress) {
    frequency = 0,
    Q = 1,
    dbGain = 2
};
```

<span class="ko-segment" data-segment-id="seg:paragraph:add-a-new-parameter-address:0017:0001">To allow the host app to interact with the parameters, the sample code project describes their default value, value range, name, and identifier in <code>Parameters.swift</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-a-new-parameter-address:0017:0002">The identifier value you specify is what the audio unit uses to reference the parameter from the host app.</span>

```swift
ParameterSpec(
    address: .frequency,
    identifier: "frequency",
    name: "Frequency",
    units: .hertz,
    valueRange: 20 ... 20_000,
    defaultValue: 100.0
)

ParameterSpec(
    address: .Q,
    identifier: "Q",
    name: "Q",
    units: .generic,
    valueRange: 0.1 ... 25,
    defaultValue: 1
)

ParameterSpec(
    address: .dbGain,
    identifier: "dbGain",
    name: "Decibel Gain",
    units: .linearGain,
    valueRange: -50 ... 50,
    defaultValue: 15
)
```

<span class="ko-segment" data-segment-id="seg:paragraph:add-a-new-parameter-address:0019:0001">To expose each parameter for digital signal processing (DSP), the code below adds each custom member variable to the <code>setParameter</code> and <code>getParameter</code> functions:</span>

```objective-c
void setParameter(AUParameterAddress address, AUValue value) {
    switch (address) {
        case vDSP_audio_unitExtensionParameterAddress::frequency:
            frequency = value;
            break;
        case vDSP_audio_unitExtensionParameterAddress::Q:
            Q = value;
            break;
        case vDSP_audio_unitExtensionParameterAddress::dbGain:
            dbGain = value;
            break;
    }
}

AUValue getParameter(AUParameterAddress address) {
    // Return the goal. It's not thread safe to return the ramping value.
    
    switch (address) {
        case vDSP_audio_unitExtensionParameterAddress::frequency:
            return (AUValue)frequency;
        case vDSP_audio_unitExtensionParameterAddress::Q:
            return (AUValue)Q;
        case vDSP_audio_unitExtensionParameterAddress::dbGain:
            return (AUValue)dbGain;
        default: return 0.f;
    }
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:implement-the-biquadratic-filter:0021:0001">Implement the Biquadratic Filter</span>

<span class="ko-segment" data-segment-id="seg:paragraph:implement-the-biquadratic-filter:0022:0001">The audio unit extension applies a peaking EQ filter with the <a href="vdsp_biquad_setup.md">@@TOKEN_0@@</a> filter.</span> <span class="ko-segment" data-segment-id="seg:paragraph:implement-the-biquadratic-filter:0022:0002">For more information about using biquadratic filters, see <a href="applying-biquadratic-filters-to-a-music-loop.md">@@TOKEN_0@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:implement-the-biquadratic-filter:0023:0001">The <code>vDSP_audio_unitExtensionDSPKernel</code> class provides the plug-in’s DSP logic, and is written in C++ to ensure real-time safety.</span> <span class="ko-segment" data-segment-id="seg:paragraph:implement-the-biquadratic-filter:0023:0002">The code below initializes the DSP kernel by creating a vector of biquadratic filters with default, pass-though coefficients:</span>

```objective-c
void initialize(int inputChannelCount, int outputChannelCount, double inSampleRate) {
    mSampleRate = inSampleRate;

    // Default coefficients.
    double coefficients[5] = {1.0, 0.0, 0.0, 1.0, 0.0};
    
    for (int i = 0; i < inputChannelCount; i++) {
        
        biquads.push_back((Biquad){
            .setup = vDSP_biquad_CreateSetup(coefficients, 1)
        });
        
        for (int j = 0; j < 4; j++) {
            biquads[i].delay[j] = 0.0;
        }
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:implement-the-biquadratic-filter:0025:0001">The <code>vDSP_audio_unitExtensionDSPKernel::process()</code> function applies the biquadratic filters to the input channels and writes the result to the output channels:</span>

```objective-c
void process(std::span<float const*> inputBuffers,
             std::span<float *> outputBuffers,
             AUEventSampleTime bufferStartTime,
             AUAudioFrameCount frameCount) {
    
    if (mBypassed) {
        // Pass the samples through.
        for (UInt32 channel = 0; channel < inputBuffers.size(); ++channel) {
            std::copy_n(inputBuffers[channel], frameCount, outputBuffers[channel]);
        }
        return;
    }
    
    double coeffs[5];
    // Populate `coeffs` from the parameters.
    biquadCoefficientsFor(mSampleRate,
                          frequency,
                          Q,
                          dbGain,
                          coeffs);
    
    // For each channel, calculate and set the coefficients, and apply the
    // biquadratic filter.
    for (UInt32 channel = 0; channel < inputBuffers.size(); ++channel) {
                    
        // Set the coefficients on the biquadratic object.
        vDSP_biquad_SetCoefficientsDouble(biquads[channel].setup,
                                          coeffs,
                                          0, 1);
        
        // Apply the biquadratic filter.
        vDSP_biquad(biquads[channel].setup,
                    biquads[channel].delay,
                    inputBuffers[channel], 1,
                    outputBuffers[channel], 1,
                    frameCount);
    }
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0027:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="applying-biquadratic-filters-to-a-music-loop.md">Applying biquadratic filters to a music loop</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Change the frequency response of an audio signal using a cascaded biquadratic filter.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/creating-an-audio-unit-extension-using-the-vdsp-library">View on Apple Developer</a>*</span>
