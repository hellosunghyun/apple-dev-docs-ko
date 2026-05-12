---
source_path: "documentation/AVFAudio/avaudiocompressedbuffer/packetdependencies-3a6ln.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/packetdependencies-3a6ln"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:packetdependencies:0000:0001">packetDependencies</span>

<span class="ko-segment" data-segment-id="seg:paragraph:packetdependencies:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:packetdependencies:0002:0001">버퍼의 패킷 의존성 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:packetdependencies:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:packetdependencies:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:packetdependencies:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:packetdependencies:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:packetdependencies:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:packetdependencies:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:packetdependencies:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:packetdependencies:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var packetDependencies: [AudioStreamPacketDependencyDescription]? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The expected behavior of an app is to pause playback if a route change occurs due to a device no longer being available (<a href="avaudiosession/routechangereason/olddeviceunavailable.md">@@TOKEN_0@@</a>).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiocompressedbuffer/bytecapacity.md">var byteCapacity: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">버퍼가 포함하는 패킷 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiocompressedbuffer/bytelength.md">var byteLength: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">버퍼의 유효 바이트 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiocompressedbuffer/data.md">var data: UnsafeMutableRawPointer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 버퍼의 데이터 바이트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiocompressedbuffer/maximumpacketsize.md">var maximumPacketSize: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">패킷의 최대 크기(바이트)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiocompressedbuffer/packetcapacity.md">var packetCapacity: AVAudioPacketCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">버퍼가 포함할 수 있는 패킷의 총 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiocompressedbuffer/packetcount.md">var packetCount: AVAudioPacketCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Keys for <a href="avaudiosession/outputmutestatechangenotification.md">@@TOKEN_0@@</a> Value is <code>NSNumber</code> type with boolean value 0 for unmuted or value 1 for muted (samples zeroed out)</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiopacketcount.md">typealias AVAudioPacketCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">오디오 데이터 패킷 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiocompressedbuffer/packetdescriptions.md">var packetDescriptions: UnsafeMutablePointer&lt;AudioStreamPacketDescription&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">버퍼의 패킷 설명 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiocompressedbuffer/packetdependencies-3a6ln">View on Apple Developer</a>*</span>
