---
source_path: "documentation/AVFoundation/avcomposition/overalldurationhint.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcomposition/overalldurationhint"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:overalldurationhint:0000:0001">overallDurationHint</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overalldurationhint:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overalldurationhint:0002:0001">현재 존재하거나 향후 존재할 수 있는 프래그먼트의 총 기간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overalldurationhint:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0001">iOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0002">iPadOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0004">macOS 10.12.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0005">tvOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:overalldurationhint:0004:0007">watchOS 3.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var overallDurationHint: CMTime { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this property is <code>YES</code> if the request renews previously provided response data that is expiring or has already expired.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">총 프래그먼트 기간 힌트를 사용할 수 없으면, 이 속성의 값은 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcomposition/cancontainfragments.md">var canContainFragments: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">프래그먼트로 에셋을 확장할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcomposition/containsfragments.md">var containsFragments: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">적어도 하나 이상의 영화 프래그먼트가 에셋을 확장하는지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcomposition/overalldurationhint">View on Apple Developer</a>*</span>
