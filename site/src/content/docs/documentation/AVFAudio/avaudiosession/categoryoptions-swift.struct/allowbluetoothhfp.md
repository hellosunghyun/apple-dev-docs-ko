---
source_path: "documentation/AVFAudio/avaudiosession/categoryoptions-swift.struct/allowbluetoothhfp.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/allowbluetoothhfp"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:allowbluetoothhfp:0000:0001">allowBluetoothHFP</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allowbluetoothhfp:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allowbluetoothhfp:0002:0001">Bluetooth Hands-Free Profile (HFP) 장치를 오디오 입력에 사용할 수 있게 하는 옵션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allowbluetoothhfp:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:allowbluetoothhfp:0004:0001">iOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowbluetoothhfp:0004:0002">iPadOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowbluetoothhfp:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowbluetoothhfp:0004:0004">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowbluetoothhfp:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowbluetoothhfp:0004:0006">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var allowBluetoothHFP: AVAudioSession.CategoryOptions { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 옵션은 <a href="avaudiosession/category-swift.struct/record.md">@@TOKEN_0@@</a> 및 <a href="avaudiosession/category-swift.struct/playandrecord.md">@@TOKEN_1@@</a> 카테고리에서만 사용할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/categoryoptions-swift.struct/allowairplay.md">static var allowAirPlay: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 세션에서 오디오를 AirPlay 기기로 스트리밍할 수 있는지 여부를 결정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/categoryoptions-swift.struct/allowbluetooth.md">static var allowBluetooth: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Bluetooth 핸즈프리 장치가 사용 가능한 입력 경로로 표시되는지 여부를 결정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/categoryoptions-swift.struct/allowbluetootha2dp.md">static var allowBluetoothA2DP: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 세션의 오디오를 Advanced Audio Distribution Profile (A2DP)을 지원하는 Bluetooth 기기로 스트리밍할 수 있는지 여부를 결정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/categoryoptions-swift.struct/bluetoothhighqualityrecording.md">static var bluetoothHighQualityRecording: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">입력 및 출력 경로에 대해 고품질 오디오를 사용하도록 지정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiounitmidiinstrument/sendpitchbend(_:onchannel:">static var defaultToSpeaker: AVAudioSession.CategoryOptions</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">세션의 오디오를 수신기 대신 내장 스피커로 기본 출력할지 여부를 지정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiounitmidiinstrument/sendpressure(_:onchannel:">static var duckOthers: AVAudioSession.CategoryOptions</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 세션의 오디오가 재생되는 동안 다른 오디오 세션의 볼륨을 줄이는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiounitmidiinstrument/sendpressure(forkey:withvalue:onchannel:">static var farFieldInput: AVAudioSession.CategoryOptions</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">세션에서 사용 가능한 경우 FarFieldInput를 사용하도록 설정하려면 이 옵션을 사용해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0002">이 옵션은 입력을 지원하는 카테고리인 <a href="avaudiosession/category-swift.struct/playandrecord.md">@@TOKEN_0@@</a>와 <a href="avaudiosession/category-swift.struct/record.md">@@TOKEN_1@@</a>에서만 유효합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:onchannel:">static var interruptSpokenAudioAndMixWithOthers: AVAudioSession.CategoryOptions</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">앱이 오디오를 재생할 때 다른 세션의 음성 오디오 콘텐츠를 일시 중지할지 여부를 지정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:bankmsb:banklsb:onchannel:">static var mixWithOthers: AVAudioSession.CategoryOptions</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">이 세션의 오디오가 다른 오디오 앱의 활성 세션 오디오와 혼합되는지 여부를 나타내는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiounitmidiinstrument/send(_:">static var overrideMutedMicrophoneInterruption: AVAudioSession.CategoryOptions</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">시스템이 내장 마이크를 음소거할 때 오디오 세션을 중단할지 여부를 나타내는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/allowbluetoothhfp">View on Apple Developer</a>*</span>
