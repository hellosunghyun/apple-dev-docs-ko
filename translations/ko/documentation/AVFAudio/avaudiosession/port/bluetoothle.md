---
source_path: "documentation/AVFAudio/avaudiosession/port/bluetoothle.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/port/bluetoothle"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bluetoothle:0000:0001">bluetoothLE</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bluetoothle:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bluetoothle:0002:0001">Bluetooth Low Energy (LE) 디바이스로 출력하는 항목입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bluetoothle:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bluetoothle:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bluetoothle:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bluetoothle:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:bluetoothle:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bluetoothle:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bluetoothle:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let bluetoothLE: AVAudioSession.Port
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Apple은 Bluetooth Low Energy (LE) 보청기 사용을 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">앱은 이러한 디바이스에 대한 라우팅을 제어할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">대신 시스템이 Bluetooth LE 라우팅이 적절한지 자동으로 결정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">오디오가 Bluetooth LE 디바이스로 라우팅되는지 확인하려면 현재 오디오 라우트를 검사하고, 다음 코드 예제에서와 같이 Bluetooth LE 포트의 존재 여부를 확인합니다.</span>

```swift
var routingToBLE = false
let session = AVAudioSession.sharedInstance()
// Iterate over the currentRoute's outputs.
for portDesc in session.currentRoute.outputs where portDesc.portType == .bluetoothLE {
    routingToBLE = true
    break
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/port/airplay.md">static let airPlay: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">AirPlay 디바이스로의 출력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/port/bluetootha2dp.md">static let bluetoothA2DP: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Bluetooth A2DP 디바이스로의 출력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/port/builtinreceiver.md">static let builtInReceiver: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">통화 시 귀에 대는 스피커(내장 수신기)로의 출력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosession/port/builtinspeaker.md">static let builtInSpeaker: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">기기의 내장 스피커로의 출력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosession/port/hdmi.md">static let HDMI: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">고해상도 멀티미디어 인터페이스(HDMI) 디바이스로의 출력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosession/port/headphones.md">static let headphones: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">유선 헤드폰으로의 출력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiosession/port/lineout.md">static let lineOut: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">도크 커넥터에 대한 라인 레벨 출력입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/port/bluetoothle">View on Apple Developer</a>*</span>
