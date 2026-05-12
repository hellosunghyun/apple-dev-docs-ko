---
source_path: "documentation/ARKit/aranchor/sessionidentifier.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/aranchor/sessionidentifier"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sessionidentifier:0000:0001">sessionIdentifier</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionidentifier:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionidentifier:0002:0001">이 앵커를 소유하는 세션의 고유 식별자입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionidentifier:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sessionidentifier:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionidentifier:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionidentifier:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var sessionIdentifier: UUID? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The default value of this property is <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">다중 사용자 환경에서 이 ID를 사용해 앵커를 생성한 사용자를 식별합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="aranchor/identifier.md">var identifier: UUID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">앵커의 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="aranchor/transform.md">var transform: simd_float4x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">앵커가 배치된 AR 세션의 world coordinate space에 대해 상대적인 앵커의 위치, 방향, 스케일을 인코딩하는 행렬입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/aranchor/sessionidentifier">View on Apple Developer</a>*</span>
