---
source_path: "documentation/AVFoundation/avcontentkeyrequest/renewsexpiringresponsedata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/renewsexpiringresponsedata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:renewsexpiringresponsedata:0000:0001">renewsExpiringResponseData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:renewsexpiringresponsedata:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:renewsexpiringresponsedata:0002:0001">컨텐츠 키 요청이 이전에 제공된 응답 데이터를 갱신하는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:renewsexpiringresponsedata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:renewsexpiringresponsedata:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:renewsexpiringresponsedata:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:renewsexpiringresponsedata:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:renewsexpiringresponsedata:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:renewsexpiringresponsedata:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:renewsexpiringresponsedata:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:renewsexpiringresponsedata:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var renewsExpiringResponseData: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성 값은 요청이 만료되었거나 이미 만료된 이전 응답 데이터를 갱신하는 경우 <code>YES</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcontentkeyrequest/identifier.md">var identifier: (any Sendable)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">콘텐츠 키의 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcontentkeyrequest/originatingrecipient.md">var originatingRecipient: (any AVContentKeyRecipient)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 요청을 시작한 AVContentKeyRecipient입니다(있는 경우).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcontentkeyrequest/canprovidepersistablecontentkey.md">var canProvidePersistableContentKey: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지속 가능한 콘텐츠 키를 생성하거나 지속 가능한 콘텐츠 키로 이전 요청에 응답하는 데 사용되는 콘텐츠 키 요청입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcontentkeyrequest/error.md">var error: (any Error)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">실패한 키 요청의 오류 설명입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcontentkeyrequest/initializationdata.md">var initializationData: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">키 응답을 얻기 위해 사용되는 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcontentkeyrequest/status-swift.property.md">var status: AVContentKeyRequest.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">콘텐츠 키 요청의 현재 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcontentkeyrequest/status-swift.enum.md">AVContentKeyRequest.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">콘텐츠 키 요청의 상태입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/renewsexpiringresponsedata">View on Apple Developer</a>*</span>
