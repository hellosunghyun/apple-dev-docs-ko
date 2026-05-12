---
source_path: "documentation/AVFAudio/avaudiocompressedbuffer/init-formatpacketcapacity.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/init-formatpacketcapacity"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initformatpacketcapacity:0000:0001">init(format:packetCapacity:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initformatpacketcapacity:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initformatpacketcapacity:0002:0001">패킷당 바이트 수가 일정한 오디오 데이터의 압축 버퍼를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initformatpacketcapacity:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initformatpacketcapacity:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initformatpacketcapacity:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initformatpacketcapacity:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initformatpacketcapacity:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:initformatpacketcapacity:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initformatpacketcapacity:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initformatpacketcapacity:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(format: AVAudioFormat, packetCapacity: AVAudioPacketCount)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">새 <a href="avaudiocompressedbuffer.md">@@TOKEN_0@@</a> 인스턴스입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">형식이 PCM이거나 패킷당 바이트 수가 가변형인 경우(예: <code>format.streamDescription-&gt;mBytesPerPacket == 0</code>) 실패합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>format</code>: 버퍼에 포함되는 오디오의 형식입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>packetCapacity</code>: 버퍼의 용량(패킷 단위)입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiorecorderdelegate/audiorecorderendinterruption(_:withflags:">init(format: AVAudioFormat, packetCapacity: AVAudioPacketCount, maximumPacketSize: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 데이터가 압축 상태로 포함된 버퍼를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiorecorderdelegate/audiorecorderbegininterruption(_:">View on Apple Developer</a>)*</span>
