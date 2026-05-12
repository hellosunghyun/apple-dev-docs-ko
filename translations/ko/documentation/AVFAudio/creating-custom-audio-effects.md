---
source_path: "documentation/AVFAudio/creating-custom-audio-effects.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/creating-custom-audio-effects"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:creating-custom-audio-effects:0000:0001">사용자 지정 오디오 효과 만들기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-custom-audio-effects:0001:0001">**Framework**: AVFAudio</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-custom-audio-effects:0002:0001">Audio Unit (AU) 플러그인을 생성해 Logic Pro X 및 GarageBand와 같은 앱에 사용자 지정 오디오 효과 처리를 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-custom-audio-effects:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-custom-audio-effects:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:creating-custom-audio-effects:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:creating-custom-audio-effects:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:creating-custom-audio-effects:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:creating-custom-audio-effects:0004:0005">Xcode 15.4+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">이 샘플 앱은 최신 Audio Unit 표준(AUv3)을 사용해 사용자 지정 오디오 효과 플러그인을 만드는 방법을 보여줍니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">AUv3 표준은 <a href="https://developer.apple.comhttps://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG">@@TOKEN_0@@</a> 모델을 기반으로 하며, 플러그인을 App Store 또는 자체 스토어를 통해 배포되는 앱에 포함된 확장으로 제공한다는 의미입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">샘플 Audio Unit은 컷오프 주파수 이하의 주파수를 출력으로 통과시키는 저역 통과 필터입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0002">이 지점 이상의 주파수는 감쇠됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0003">또한 컷오프 지점 주변의 좁은 대역을 부스트하거나 감쇠하는 필터 공진도 조절도 가능합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0004">아래 그림에서처럼, 플러그인의 사용자 인터페이스에 있는 드래그 가능한 점을 이동해 이러한 값을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">!<a href="https://docs-assets.developer.apple.com/published/77036aca41724e5409050b93ab4a5b9c/graph.png">plug-in User Interface</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">이 프로젝트에는 iOS와 macOS 대상이 모두 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">각 플랫폼의 기본 앱 대상에는 두 개의 지원 대상이 있습니다. <code>AUv3FilterExtension</code>은 플러그인을 Audio Unit 확장으로 패키징한 대상이고, <code>AUv3FilterFramework</code>는 플러그인의 코드와 리소스를 번들로 묶는 대상입니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0010:0001">**참고**: 이 Audio Unit 확장을 호스트 앱에서 사용하는 방법은 <a href="https://developer.apple.com/documentation/AudioToolbox/incorporating-audio-effects-and-instruments">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:create-a-custom-audio-effect-plug-in:0011:0001">사용자 지정 오디오 효과 플러그인 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-a-custom-audio-effect-plug-in:0012:0001">확장 자체에는 두 가지 주요 구성 요소가 있습니다. 하나는 Audio Unit 본체이고, 다른 하나는 이를 생성하는 factory 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-a-custom-audio-effect-plug-in:0013:0001">샘플 앱의 Audio Unit은 <code>AUv3FilterDemo</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-a-custom-audio-effect-plug-in:0013:0002">이 클래스는 <a href="https://developer.apple.com/documentation/AudioToolbox/AUAudioUnit">@@TOKEN_0@@</a>을 상속하는 Swift class이며, 매개변수, 프리셋, I/O 버스 같은 핵심 기능을 포함해 플러그인의 인터페이스를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-a-custom-audio-effect-plug-in:0013:0003"><code>FilterDSPKernel</code>이라는 클래스가 플러그인의 디지털 신호 처리(DSP) 로직을 제공하며, 실시간 안전성을 보장하기 위해 C++로 작성됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-a-custom-audio-effect-plug-in:0013:0004">Swift가 C++와 직접 통신할 수 없기 때문에 샘플 프로젝트에는 중간 역할을 하는 Objective-C++ 어댑터 클래스 <code>FilterDSPKernelAdapter</code>도 포함됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-a-custom-audio-effect-plug-in:0014:0001"><code>AUv3FilterDemoViewController</code>는 Audio Unit의 메인 뷰 컨트롤러입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-a-custom-audio-effect-plug-in:0014:0002">이 클래스는 <a href="https://developer.apple.com/documentation/AudioToolbox/AUAudioUnitFactory">@@TOKEN_0@@</a> protocol을 채택하며 플러그인의 새 인스턴스 생성을 담당합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-a-custom-audio-effect-plug-in:0014:0003">호스트 앱의 요청 시 <code>AUv3FilterDemo</code>의 새 인스턴스를 반환하도록 protocol의 <a href="https://developer.apple.com/documentation/AudioToolbox/AUAudioUnitFactory/createAudioUnit(with:">@@TOKEN_1@@</a>) factory 메서드를 구현합니다.</span>

```swift
extension AUv3FilterDemoViewController: AUAudioUnitFactory {
    public func createAudioUnit(with componentDescription: AudioComponentDescription) throws -> AUAudioUnit {
        audioUnit = try AUv3FilterDemo(componentDescription: componentDescription, options: [])
        return audioUnit!
    }
}
```

> <span class="ko-segment" data-segment-id="seg:blockquote:create-a-custom-audio-effect-plug-in:0016:0001">❗ **중요**: 글리치 없는 성능을 보장하려면 플러그인의 오디오 처리가 실시간 안전한 컨텍스트에서 이루어져야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:create-a-custom-audio-effect-plug-in:0016:0002">오디오 렌더링 시 메모리를 할당하거나 파일 I/O를 수행하거나 잠금을 걸거나 Swift 또는 Objective-C 런타임과 상호작용해서는 안 됩니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:add-custom-parameters-to-your-audio-unit:0017:0001">오디오 유닛에 사용자 지정 매개변수 추가</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0018:0001">대부분의 Audio Unit에서는 오디오 처리를 구성하기 위해 하나 이상의 매개변수를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0018:0002">오디오 유닛은 <a href="https://developer.apple.com/documentation/AudioToolbox/AUParameterTree">@@TOKEN_0@@</a> 인스턴스가 제공하는 트리 구조로 매개변수를 배치합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0018:0003">이 객체는 플러그인 매개변수와 매개변수 그룹 트리의 루트 노드를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0019:0001"><code>AUv3FilterDemo</code>에는 필터의 컷오프 주파수와 공진을 제어하는 매개변수가 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0019:0002"><code>AUParameterTree</code>의 factory 메서드를 사용해 매개변수를 생성합니다.
``<code>swift
private enum AUv3FilterParam: AUParameterAddress {
    case cutoff, resonance
}

/// The parameter to control the cutoff frequency (12 Hz - 20 kHz).
var cutoffParam: AUParameter = {
    let parameter =
        AUParameterTree.createParameter(withIdentifier: &quot;cutoff&quot;,
                                        name: &quot;Cutoff&quot;,
                                        address: AUv3FilterParam.cutoff.rawValue,
                                        min: 12.0,
                                        max: 20_000.0,
                                        unit: .hertz,
                                        unitName: nil,
                                        flags: [.flag_IsReadable,
                                                .flag_IsWritable,
                                                .flag_CanRamp],
                                        valueStrings: nil,
                                        dependentParameters: nil)
    // Set default value
    parameter.value = 0.0

    return parameter
}()

/// The parameter to control the cutoff frequency's resonance (+/-20 dB).
var resonanceParam: AUParameter = {
    let parameter =
        AUParameterTree.createParameter(withIdentifier: &quot;resonance&quot;,
                                        name: &quot;Resonance&quot;,
                                        address: AUv3FilterParam.resonance.rawValue,
                                        min: -20.0,
                                        max: 20.0,
                                        unit: .decibels,
                                        unitName: nil,
                                        flags: [.flag_IsReadable,
                                                .flag_IsWritable,
                                                .flag_CanRamp],
                                        valueStrings: nil,
                                        dependentParameters: nil)
    // Set the default value.
    parameter.value = 20_000.0

    return parameter
}()
</code>``</span>

```swift
private enum AUv3FilterParam: AUParameterAddress {
    case cutoff, resonance
}

/// The parameter to control the cutoff frequency (12 Hz - 20 kHz).
var cutoffParam: AUParameter = {
    let parameter =
        AUParameterTree.createParameter(withIdentifier: "cutoff",
                                        name: "Cutoff",
                                        address: AUv3FilterParam.cutoff.rawValue,
                                        min: 12.0,
                                        max: 20_000.0,
                                        unit: .hertz,
                                        unitName: nil,
                                        flags: [.flag_IsReadable,
                                                .flag_IsWritable,
                                                .flag_CanRamp],
                                        valueStrings: nil,
                                        dependentParameters: nil)
    // Set default value
    parameter.value = 0.0

    return parameter
}()

/// The parameter to control the cutoff frequency's resonance (+/-20 dB).
var resonanceParam: AUParameter = {
    let parameter =
        AUParameterTree.createParameter(withIdentifier: "resonance",
                                        name: "Resonance",
                                        address: AUv3FilterParam.resonance.rawValue,
                                        min: -20.0,
                                        max: 20.0,
                                        unit: .decibels,
                                        unitName: nil,
                                        flags: [.flag_IsReadable,
                                                .flag_IsWritable,
                                                .flag_CanRamp],
                                        valueStrings: nil,
                                        dependentParameters: nil)
    // Set the default value.
    parameter.value = 20_000.0

    return parameter
}()
```

<span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0021:0001">컷오프 매개변수는 12 Hz에서 20 kHz 범위를 정의하고, 공진 매개변수는 -20 dB에서 20 dB 범위를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0021:0002">각 매개변수는 읽기 및 쓰기가 가능하며 램핑도 지원하므로 시간이 지남에 따라 값을 수정할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0022:0001"><code>AUParameterTree</code> 인스턴스를 생성하고 이를 트리의 자식으로 설정하여 매개변수를 트리로 구성합니다.</span>

```swift
// Create the audio unit's tree of parameters.
parameterTree = AUParameterTree.createTree(withChildren: [cutoffParam,
                                                          resonanceParam])
```

<span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0024:0001">Next, you bind handlers to the parameter tree’s readable and writeable values by installing closures for its <a href="https://developer.apple.com/documentation/AudioToolbox/AUParameterNode/implementorValueObserver">@@TOKEN_0@@</a>, <a href="https://developer.apple.com/documentation/AudioToolbox/AUParameterNode/implementorValueProvider">@@TOKEN_1@@</a>, and <a href="https://developer.apple.com/documentation/AudioToolbox/AUParameterNode/implementorStringFromValueCallback">@@TOKEN_2@@</a> properties.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-custom-parameters-to-your-audio-unit:0024:0002">이러한 클로저는 filter adapter 인스턴스로 위임되며, 이는 다시 하위 DSP 로직과 통신합니다.</span>

```swift
// A closure for observing all externally generated parameter value changes.
parameterTree.implementorValueObserver = { param, value in
    kernelAdapter.setParameter(param, value: value)
}

// A closure for returning state of the requested parameter.
parameterTree.implementorValueProvider = { param in
    return kernelAdapter.value(for: param)
}

// A closure for returning the string representation of the requested parameter value.
parameterTree.implementorStringFromValueCallback = { param, value in
    switch param.address {
    case AUv3FilterParam.cutoff.rawValue:
        return String(format: "%.f", value ?? param.value)
    case AUv3FilterParam.resonance.rawValue:
        return String(format: "%.2f", value ?? param.value)
    default:
        return "?"
    }
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:connect-the-parameters-to-your-user-interface:0026:0001">매개변수를 사용자 인터페이스에 연결</span>

<span class="ko-segment" data-segment-id="seg:paragraph:connect-the-parameters-to-your-user-interface:0027:0001">샘플 앱의 iOS 및 macOS 대상은 각각 플랫폼별 사용자 인터페이스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:connect-the-parameters-to-your-user-interface:0027:0002">사용자 인터페이스와 Audio Unit 간 통신을 조정하기 위해 <code>AUv3FilterDemoViewController</code>라는 공유 뷰 컨트롤러를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:connect-the-parameters-to-your-user-interface:0027:0003"><code>connectViewToAU()</code> 메서드에서 사용자 인터페이스를 Audio Unit의 매개변수에 연결합니다.</span>

```swift
private func connectViewToAU() {
    guard needsConnection, let paramTree = audioUnit?.parameterTree else { return }

    // Find the cutoff and resonance parameters in the parameter tree.
    guard let cutoff = paramTree.value(forKey: "cutoff") as? AUParameter,
        let resonance = paramTree.value(forKey: "resonance") as? AUParameter else {
            fatalError("Required AU parameters not found.")
    }

    // Set the instance variables.
    cutoffParameter = cutoff
    resonanceParameter = resonance

    // Observe major state changes like a user selecting a user preset.
    observer = audioUnit?.observe(\.allParameterValues) { object, change in
        DispatchQueue.main.async {
            self.updateUI()
        }
    }

    // Observe value changes to the cutoff and resonance parameters.
    parameterObserverToken =
        paramTree.token(byAddingParameterObserver: { [weak self] address, value in
            guard let self = self else { return }

            // An arbitrary queue is calling this closure. Ensure
            // all UI updates dispatch back to the main thread.
            if [cutoff.address, resonance.address].contains(address) {
                DispatchQueue.main.async {
                    self.updateUI()
                }
            }
        })

    // Indicate the view and the audio unit have a connection.
    needsConnection = false

    // Sync the UI with the parameter state.
    updateUI()
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:connect-the-parameters-to-your-user-interface:0029:0001">위의 코드에서처럼 <code>connectViewToAU()</code> 메서드에서는 Audio Unit의 매개변수 트리를 찾아 cutoff 및 resonance 매개변수를 검색합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:connect-the-parameters-to-your-user-interface:0029:0002">플러그인 매개변수 값이 변경될 때 사용자 인터페이스를 업데이트하도록 옵저버 클로저도 추가합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:add-factory-presets:0030:0001">팩토리 프리셋 추가</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-factory-presets:0031:0001">대부분의 오디오 플러그인에는 *factory presets*이라고 하는 미리 정의된 값의 집합이 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-factory-presets:0031:0002">팩토리 프리셋은 플러그인의 매개변수 값을 미리 구성한 값으로, 추가 사용자 지정 작업을 위한 유용한 시작점을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:add-factory-presets:0031:0003">호스트 앱은 이러한 프리셋을 사용자 인터페이스에 표시하여 사용자가 선택할 수 있게 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:add-factory-presets:0032:0001">다음 코드 예시는 팩토리 프리셋과 해당 연결 값을 정의하는 방법을 보여줍니다.</span>

```swift
public override var factoryPresets: [AUAudioUnitPreset] {
    return [
        AUAudioUnitPreset(number: 0, name: "Prominent"),
        AUAudioUnitPreset(number: 1, name: "Bright"),
        AUAudioUnitPreset(number: 2, name: "Warm")
    ]
}

private let factoryPresetValues:[(cutoff: AUValue, resonance: AUValue)] = [
    (2500.0, 5.0),    // "Prominent"
    (14_000.0, 12.0), // "Bright"
    (384.0, -3.0)     // "Warm"
]
```

##### <span class="ko-segment" data-segment-id="seg:heading:support-user-presets:0034:0001">사용자 프리셋 지원</span>

<span class="ko-segment" data-segment-id="seg:paragraph:support-user-presets:0035:0001">팩토리 프리셋은 추가 사용자 지정의 유용한 시작점을 제공하지만, 사용자는 변경 사항을 저장하고 자신만의 사용자 프리셋을 만들 수 있어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:support-user-presets:0035:0002"><code>AUAudioUnit</code>은(는) 사용자 프리셋에 대한 기본 지원을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:support-user-presets:0035:0003">이 지원을 Audio Unit에서 사용하려면 <a href="https://developer.apple.com/documentation/AudioToolbox/AUAudioUnit/supportsUserPresets">@@TOKEN_0@@</a> 속성을 재정의하여 <code>true</code>를 반환하도록 합니다.</span>

```swift
/// Indicates that this audio unit supports persisting user presets.
public override var supportsUserPresets: Bool {
    return true
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:support-user-presets:0037:0001">사용자 프리셋 지원을 활성화하면 Audio Unit이 사용자 프리셋을 자동으로 로드하고 저장 및 삭제할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:support-user-presets:0037:0002"><a href="https://developer.apple.com/documentation/AudioToolbox/AUAudioUnit/userPresets">@@TOKEN_0@@</a>, <a href="https://developer.apple.com/documentation/AudioToolbox/AUAudioUnit/saveUserPreset(_:">@@TOKEN_1@@</a>), <a href="https://developer.apple.com/documentation/AudioToolbox/AUAudioUnit/deleteUserPreset(_:">@@TOKEN_2@@</a>) API의 기본 구현은 내부 저장소에서 읽기와 쓰기를 수행하지만, 지속성 동작을 직접 관리하려는 경우 이 속성과 메서드를 재정의할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:support-user-presets:0037:0003">예를 들어, 기본 동작을 재정의하여 사용자 프리셋을 iCloud 컨테이너 또는 다른 원격 위치에 직접 영속화할 수 있습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:select-factory-and-user-presets:0038:0001">팩토리 및 사용자 프리셋 선택</span>

<span class="ko-segment" data-segment-id="seg:paragraph:select-factory-and-user-presets:0039:0001">호스트 앱은 플러그인의 <code>currentPreset</code> 속성을 설정하여 팩토리 또는 사용자 프리셋을 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-factory-and-user-presets:0039:0002">이 속성을 재정의하고 선택한 프리셋 유형에 따라 적절한 동작을 수행합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-factory-and-user-presets:0039:0003">사용자가 팩토리 프리셋(프리셋 <code>number</code>가 <code>0</code>보다 큰 값)을 선택한 경우, 해당 값 집합을 조회하여 매개변수 값을 그에 맞게 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-factory-and-user-presets:0039:0004">If the user selected a user preset (a preset <code>number</code> less than <code>0</code>), restore the preset’s parameter state by calling the <a href="https://developer.apple.com/documentation/AudioToolbox/AUAudioUnit/presetState(for:">@@TOKEN_2@@</a>) method and setting the returned data as the <a href="https://developer.apple.com/documentation/AudioToolbox/AUAudioUnit/fullStateForDocument">@@TOKEN_3@@</a> property.</span>

```swift
private var _currentPreset: AUAudioUnitPreset?

/// The currently selected preset.
public override var currentPreset: AUAudioUnitPreset? {
    get { return _currentPreset }
    set {
        // If the newValue is nil, return.
        guard let preset = newValue else {
            _currentPreset = nil
            return
        }
        
        // Factory presets need to always have a number >= 0.
        if preset.number >= 0 {
            let values = factoryPresetValues[preset.number]
            parameters!.setParameterValues(cutoff: values.cutoff, resonance: values.resonance)
            _currentPreset = preset
        }
        // User presets are always negative.
        else {
            // Attempt to restore the archived state for this user preset.
            do {
                fullStateForDocument = try presetState(for: preset)
                // Set the currentPreset after successfully restoring the state.
                _currentPreset = preset
            } catch {
                print("Unable to restore set for preset \(preset.name)")
            }
        }
    }
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:package-your-plug-in-to-run-in-process:0041:0001">Package Your Plug in to Run in Process</span>

<span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0042:0001">Like all App Extensions, AUv3 plug-ins run *out-of-process* by default, which means the extension runs in a separate process from the host app, and all communication between the two occurs over interprocess communication (IPC).</span> <span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0042:0002">This model provides increased security and stability for the host app.</span> <span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0042:0003">For example, if an AUv3 plug-in crashes, the host app won’t crash.</span> <span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0042:0004">However, the IPC communication adds a small amount of overhead to each render cycle, which may be unacceptable depending on the needs of a given application.</span> <span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0042:0005">In macOS only, you can package your plug-in to run *in-process*, which eliminates the IPC communication as your Audio Unit runs as part of the host’s process.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0043:0001">Running an in-process plug-in requires an agreement between the host and the Audio Unit.</span> <span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0043:0002">The host requests in-process instantiation by passing the <a href="https://developer.apple.com/documentation/AudioToolbox/AudioComponentInstantiationOptions/loadInProcess">@@TOKEN_0@@</a> option during the plug-in’s creation, and you need to package your Audio Unit as described and shown below.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0044:0001">Your extension’s main binary can’t be dynamically loaded into another app, which means all executable code needs to reside in a separate framework bundle.</span> <span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0044:0002">However, the extension target still needs to contain at least one source file for the extension binary to be created, properly loaded, and linked with the framework bundle.</span> <span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0044:0003">To ensure the extension is created, add some unused placeholder code in your extension target, like that found in <code>AUv3FilterExtension.swift</code>.</span>

```swift
import AUv3FilterFramework

func placeholder() {
    // This placeholder function ensures the extension loads correctly.
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0046:0001">The macOS sample packages all of the Audio Unit’s code into the <code>AUv3FilterFramework</code> target.</span> <span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0046:0002">You indicate that the extension’s code exists in a separate bundle by adding an <code>AudioComponentBundle</code> extension attribute to the target’s <code>Info.plist</code> file.</span>

```None
<key>NSExtension</key>
<dict>
    <key>NSExtensionAttributes</key>
    <dict>
        <key>AudioComponentBundle</key>
        <string>com.example.apple-samplecode.AUv3FilterFramework</string>
        ...
    </dict>
    ...
</dict>
```

<span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0048:0001">If you’re using a xib or Storyboard for your user interface, override your view controller’s <a href="https://developer.apple.com/documentation/AppKit/NSViewController/init(nibName:bundle:">@@TOKEN_0@@</a>) initializer and pass the framework bundle to the superclass initializer.</span> <span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0048:0002">This ensures your user interface properly loads when the system requests your Audio Unit extension.</span>

```swift
public override init(nibName: NSNib.Name?, bundle: Bundle?) {
    // Pass a reference to the owning framework bundle.
    super.init(nibName: nibName, bundle: Bundle(for: type(of: self)))
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:package-your-plug-in-to-run-in-process:0050:0001">Finally, in the extension’s <code>Info.plist</code> file, set the Audio Unit’s factory object, <code>AUv3FilterDemoViewController</code>, as the extension’s principal class.</span>

```None
<key>NSExtension</key>
<dict>
    <key>NSExtensionPrincipalClass</key>
    <string>AUv3FilterFramework.AUv3FilterDemoViewController</string>
    ...
</dict>
```

> <span class="ko-segment" data-segment-id="seg:blockquote:package-your-plug-in-to-run-in-process:0052:0001">**Note**: See <a href="https://developer.apple.com/documentation/AudioToolbox/incorporating-audio-effects-and-instruments">@@TOKEN_0@@</a> for a host app you can use to load your plug-in both in-process and out-of-process.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0053:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0054:0001"><a href="audio-units.md">Audio Units</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">The data type for a plug-in component that provides audio processing or audio data generation.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">*<a href="https://developer.apple.com/documentation/avfaudio/creating-custom-audio-effects">View on Apple Developer</a>*</span>
