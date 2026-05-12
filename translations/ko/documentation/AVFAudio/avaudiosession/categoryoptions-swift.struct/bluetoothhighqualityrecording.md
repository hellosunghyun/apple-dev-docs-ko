---
source_path: "documentation/AVFAudio/avaudiosession/categoryoptions-swift.struct/bluetoothhighqualityrecording.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/bluetoothhighqualityrecording"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bluetoothhighqualityrecording:0000:0001">bluetoothHighQualityRecording</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bluetoothhighqualityrecording:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bluetoothhighqualityrecording:0002:0001">이 옵션은 Bluetooth 입력 및 출력 라우트에서 고품질 오디오를 활성화하도록 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bluetoothhighqualityrecording:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bluetoothhighqualityrecording:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bluetoothhighqualityrecording:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bluetoothhighqualityrecording:0004:0003">Mac Catalyst 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var bluetoothHighQualityRecording: AVAudioSession.CategoryOptions { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 옵션을 지정하면 Bluetooth 경로가 지원하는 경우, 특정 AirPods 모델처럼 전체 대역폭 오디오가 활성화됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">오디오 경로가 이 기능을 지원하지 않을 때 오디오 세션이 대체로 사용하는 <a href="avaudiosession/categoryoptions-swift.struct/allowbluetoothhfp.md">@@TOKEN_0@@</a> 옵션과 함께 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">고품질 녹음은 <a href="avaudiosession/mode-swift.struct/default.md">@@TOKEN_0@@</a> 오디오 세션 모드를 사용할 때만 요청할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **중요**: Bluetooth 고품질 녹음은 현재 유럽연합에서 지원되지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Bluetooth 입력 포트가 고품질 녹음을 지원하는지 확인하려면 <a href="avaudiosessionportdescription/bluetoothmicrophoneextension.md">@@TOKEN_0@@</a>에 접근한 다음 아래와 같이 확장 기능의 <a href="avaudiosessionportextensionbluetoothmicrophone/highqualityrecording.md">@@TOKEN_1@@</a> 기능을 조회합니다.</span>

```swift
let audioSession = AVAudioSession.sharedInstance()
// Get the input port description for the current route.
guard let inputPort = audioSession.currentRoute.inputs.first else { return }
// Access the Bluetooth microphone extension, if it exists.
guard let micExtension = inputPort.bluetoothMicrophoneExtension else { return }
// Query the extension's high-quality recording capability.
if micExtension.highQualityRecording.isSupported {
    // The Bluetooth input supports high-quality recording.
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">마찬가지로 고품질 녹음 기능의 <a href="avaudiosessioncapability/isenabled.md">@@TOKEN_0@@</a> 속성을 조회하면 활성 세션에서 이 기능이 활성 상태인지 확인할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">앱에서 고품질 녹음을 사용하는 경우, 수신 전화 벨소리로 녹음 세션이 중단되는 것을 방지하려면 녹음 중 <a href="avaudiosession/setprefersnointerruptionsfromsystemalerts(_:">@@TOKEN_0@@</a>.md)를 설정하는 것을 고려합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0014:0001">**참고**: 이 옵션은 사용 시 입력 지연이 증가할 수 있으며 실시간 통신 사용에는 권장되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/categoryoptions-swift.struct/allowairplay.md">static var allowAirPlay: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 세션에서 오디오를 AirPlay 장치로 스트리밍할 수 있는지 결정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosession/categoryoptions-swift.struct/allowbluetooth.md">static var allowBluetooth: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Bluetooth 핸즈프리 장치가 사용 가능한 입력 라우트로 표시되는지 결정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosession/categoryoptions-swift.struct/allowbluetootha2dp.md">static var allowBluetoothA2DP: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 옵션은 Advanced Audio Distribution Profile (A2DP)를 지원하는 Bluetooth 장치로 이 세션의 오디오를 스트리밍할 수 있는지 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosession/categoryoptions-swift.struct/allowbluetoothhfp.md">static var allowBluetoothHFP: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">이 옵션은 Bluetooth Hands-Free Profile (HFP) 장치를 오디오 입력으로 사용할 수 있도록 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiosession/categoryoptions-swift.struct/defaulttospeaker.md">static var defaultToSpeaker: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">이 옵션은 세션의 오디오가 수신기 대신 내장 스피커로 기본 출력되는지 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiosession/categoryoptions-swift.struct/duckothers.md">static var duckOthers: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">이 옵션은 이 세션의 오디오가 재생되는 동안 다른 오디오 세션의 볼륨을 줄입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiosession/categoryoptions-swift.struct/farfieldinput.md">static var farFieldInput: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">이 옵션은 FarFieldInput를 사용할 수 있을 때 세션에서 이를 선호하면 사용해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0002">이 옵션은 입력을 지원하는 카테고리인 <a href="avaudiosession/category-swift.struct/playandrecord.md">@@TOKEN_0@@</a> 및 <a href="avaudiosession/category-swift.struct/record.md">@@TOKEN_1@@</a>에서만 유효합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudiosession/categoryoptions-swift.struct/interruptspokenaudioandmixwithothers.md">static var interruptSpokenAudioAndMixWithOthers: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">이 옵션은 앱이 오디오를 재생할 때 다른 세션의 음성 오디오 콘텐츠를 일시 중지할지 여부를 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avaudiosession/categoryoptions-swift.struct/mixwithothers.md">static var mixWithOthers: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">이 옵션은 이 세션의 오디오가 다른 오디오 앱의 활성 세션 오디오와 혼합되는지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudiosession/categoryoptions-swift.struct/overridemutedmicrophoneinterruption.md">static var overrideMutedMicrophoneInterruption: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">이 옵션은 시스템이 내장 마이크를 음소거할 때 오디오 세션을 중단하는지 여부를 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/bluetoothhighqualityrecording">View on Apple Developer</a>*</span>
