---
source_path: "documentation/AVFoundation/avcaptureaudiodataoutput/spatialaudiochannellayouttag.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/spatialaudiochannellayouttag"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:spatialaudiochannellayouttag:0000:0001">spatialAudioChannelLayoutTag</span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatialaudiochannellayouttag:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatialaudiochannellayouttag:0002:0001">audio data output에서 생성한 오디오 샘플 버퍼의 오디오 채널 레이아웃 태그입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatialaudiochannellayouttag:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:spatialaudiochannellayouttag:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spatialaudiochannellayouttag:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spatialaudiochannellayouttag:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spatialaudiochannellayouttag:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spatialaudiochannellayouttag:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var spatialAudioChannelLayoutTag: AudioChannelLayoutTag { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">audio data output의 관련 <a href="avcapturedeviceinput/multichannelaudiomode.md">@@TOKEN_0@@</a> 속성을 <code>AVCaptureMultichannelAudioModeFirstOrderAmbisonics</code>로 설정하면, <a href="avcapturesession.md">@@TOKEN_2@@</a>에서 First-order Ambisonsics(FOA) 입력에 최대 두 개의 <a href="avcaptureaudiodataoutput.md">@@TOKEN_3@@</a> 인스턴스를 연결할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">단일 <a href="avcaptureaudiodataoutput.md">@@TOKEN_0@@</a> 인스턴스를 연결하는 경우에는 <a href="avcaptureaudiodataoutput/spatialaudiochannellayouttag.md">@@TOKEN_1@@</a> 속성을 FOA 오디오 4채널 또는 스테레오 오디오 2채널을 생성하도록 구성해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">두 개의 <a href="avcaptureaudiodataoutput.md">@@TOKEN_0@@</a> 인스턴스를 연결하는 경우에는 하나는 FOA 오디오 4채널을 출력하고 다른 하나는 스테레오 오디오 2채널을 출력하도록 구성해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">따라서 <a href="avcapturedeviceinput/multichannelaudiomode.md">@@TOKEN_0@@</a> 속성을 <code>AVCaptureMultichannelAudioModeFirstOrderAmbisonics</code>로 설정하면, 연결된 <a href="avcaptureaudiodataoutput.md">@@TOKEN_2@@</a> 인스턴스의 <a href="avcaptureaudiodataoutput/spatialaudiochannellayouttag.md">@@TOKEN_3@@</a> 속성을 스테레오의 경우 <code>kAudioChannelLayoutTag_Stereo</code>, FOA의 경우 <code>(kAudioChannelLayoutTag_HOA_ACN_SN3D | 4)</code>(을/를)으로 설정해야 합니다(<a href="https://developer.apple.com/documentation/CoreAudioTypes/AudioChannelLayoutTag">@@TOKEN_6@@</a>).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">When you set your associated <a href="avcapturedeviceinput/multichannelaudiomode.md">@@TOKEN_0@@</a> to any other value, the <a href="avcapturesession.md">@@TOKEN_1@@</a> only supports one <a href="avcaptureaudiodataoutput.md">@@TOKEN_2@@</a>, and you may only set <a href="avcaptureaudiodataoutput/spatialaudiochannellayouttag.md">@@TOKEN_3@@</a> to <code>kAudioChannelLayoutTag_Unknown</code> (the default value).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="avcapturesession.md">@@TOKEN_0@@</a>는 <code>AVCaptureSession/startRunning:</code> 또는 <a href="avcapturesession/commitconfiguration(">@@TOKEN_2@@</a>.md) 호출 시 앱이 위 규칙을 준수했는지 검사하고 필요하면 <code>NSInvalidArgumentException</code>을 throw합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var audioSettings: [String : Any]!](avcapturedevice/setcinematicvideotrackingfocus(at:focusmode:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">출력 전에 오디오를 디코드하거나 재인코드하는 데 사용되는 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func recommendedAudioSettingsForAssetWriter(writingTo: AVFileType) -&gt; [String : Any]?](avcapturedevice/setcinematicvideotrackingfocus(detectedobjectid:focusmode:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001"><code>AVAssetWriterInput</code>와 함께 사용할 권장 설정을 지정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/spatialaudiochannellayouttag">View on Apple Developer</a>*</span>
