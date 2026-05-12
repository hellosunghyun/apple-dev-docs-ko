---
source_path: "documentation/ARKit/aranchor/init-transform.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/aranchor/init-transform"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittransform:0000:0001">init(transform:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittransform:0001:0001">**Framework**: ARKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittransform:0002:0001">지정한 transform으로 새 앵커 객체를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittransform:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittransform:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittransform:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittransform:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(transform: simd_float4x4)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">ARKit의 월드 좌표 공간은 항상 오른손 좌표계 규칙을 따르지만, 세션 구성에 따라 방향이 정해집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">자세한 내용은 <a href="understanding-world-tracking.md">@@TOKEN_0@@</a> 문서를 참조합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion-1:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion-1:0010:0001">AR 세션에서 사용자 지정 앵커 추적을 시작하려면 <a href="arsession/add(anchor:">@@TOKEN_0@@</a>.md) 메서드를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>transform</code>: 앵커가 배치되는 AR 세션의 월드 좌표 공간을 기준으로 앵커의 위치, 방향 및 스케일을 인코딩하는 행렬입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arscnview/node(for:">init(name: String, transform: simd_float4x4)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 transform과 설명용 이름으로 새 앵커 객체를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="aranchor/name.md">var name: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arscnview/unprojectpoint(_:ontoplane:">View on Apple Developer</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/arkit/aranchor/init(transform:">Apple Developer에서 보기</a>)*</span>
