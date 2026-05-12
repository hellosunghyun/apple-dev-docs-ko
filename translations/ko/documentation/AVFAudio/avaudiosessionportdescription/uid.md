---
source_path: "documentation/AVFAudio/avaudiosessionportdescription/uid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosessionportdescription/uid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:uid:0000:0001">uid</span>

<span class="ko-segment" data-segment-id="seg:paragraph:uid:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:uid:0002:0001">포트에 대해 시스템이 할당한 고유 식별자(UID)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:uid:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:uid:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:uid:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:uid:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:uid:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:uid:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:uid:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var uid: String { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성의 값은 포트의 <a href="avaudiosessionportdescription/channels.md">@@TOKEN_0@@</a> 배열에 있는 각 <a href="avaudiosessionchanneldescription.md">@@TOKEN_1@@</a> 객체의 <a href="avaudiosessionchanneldescription/owningportuid.md">@@TOKEN_2@@</a> 속성과 일치합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosessionportdescription/portname.md">var portName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">포트의 설명 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosessionportdescription/porttype.md">var portType: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">포트의 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/port.md">AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">사용 가능한 입력 및 출력 포트 유형을 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[var channels: [AVAudioSessionChannelDescription]?](avaudiosessionportdescription/channels.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">포트의 입력 또는 출력 채널을 설명하는 채널 객체의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosessionchanneldescription.md">class AVAudioSessionChannelDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 기기의 하드웨어 채널을 설명하는 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosessionportdescription/hashardwarevoicecallprocessing.md">var hasHardwareVoiceCallProcessing: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">연결된 하드웨어 포트에 양방향 음성 통신용 기본 제공 처리가 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosessionportdescription/isspatialaudioenabled.md">var isSpatialAudioEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">포트가 공간 오디오 재생을 지원하는지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosessionportdescription/uid">View on Apple Developer</a>*</span>
