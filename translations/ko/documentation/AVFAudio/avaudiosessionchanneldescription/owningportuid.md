---
source_path: "documentation/AVFAudio/avaudiosessionchanneldescription/owningportuid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosessionchanneldescription/owningportuid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:owningportuid:0000:0001">owningPortUID</span>

<span class="ko-segment" data-segment-id="seg:paragraph:owningportuid:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:owningportuid:0002:0001">이 채널의 소유 포트에 대한 고유 식별자(UID)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:owningportuid:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:owningportuid:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:owningportuid:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:owningportuid:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:owningportuid:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:owningportuid:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:owningportuid:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var owningPortUID: String { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성의 값은 <a href="avaudiosessionchanneldescription/channelnumber.md">@@TOKEN_0@@</a> 속성의 값과 함께 사용하여 특정 하드웨어 채널과 통신할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosessionchanneldescription/channelname.md">var channelName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">채널의 설명 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosessionchanneldescription/channelnumber.md">var channelNumber: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 채널이 소유 포트의 채널 배열에서 차지하는 인덱스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosessionchanneldescription/channellabel.md">var channelLabel: AudioChannelLabel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 채널의 물리적 위치에 대한 설명입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosessionchanneldescription/owningportuid">View on Apple Developer</a>*</span>
