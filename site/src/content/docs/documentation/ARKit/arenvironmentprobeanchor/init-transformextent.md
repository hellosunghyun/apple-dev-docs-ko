---
source_path: "documentation/ARKit/arenvironmentprobeanchor/init-transformextent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arenvironmentprobeanchor/init-transformextent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittransformextent:0000:0001">init(transform:extent:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittransformextent:0001:0001">**Framework**: ARKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittransformextent:0002:0001">새 환경 프로브 앵커를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittransformextent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittransformextent:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittransformextent:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittransformextent:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(transform: simd_float4x4, extent: simd_float3)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>add(anchor:)</code> 메서드를 사용해 AR 세션에서 사용자 지정 앵커 추적을 시작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">장면에 환경 프로브 앵커를 추가하면 ARKit가 해당 앵커의 환경 텍스처 생성을 시작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">앵커에 새 <a href="arenvironmentprobeanchor/environmenttexture.md">@@TOKEN_0@@</a>가 있는 경우 알림을 받으려면 <a href="arsessiondelegate/session(_:didupdate:">@@TOKEN_1@@</a>-3qtt8.md), <a href="arscnviewdelegate/renderer(_:didupdate:for:">@@TOKEN_2@@</a>.md), <a href="arskviewdelegate/view(_:didupdate:for:">@@TOKEN_3@@</a>.md) 중 하나의 델리게이트 메서드를 구현해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>transform</code>: 앵커의 위치, 방향, 스케일을 인코딩하는 행렬로, 앵커를 배치한 AR 세션의 월드 좌표계에 상대적으로 지정됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>extent</code>: 프로브 앵커의 범위(*bounds*)입니다. ARKit의 세계 좌표계는 항상 오른손 좌표 규칙을 따르지만 세션 구성에 따라 방향이 결정됩니다. 자세한 내용은 <a href="understanding-world-tracking.md">@@TOKEN_1@@</a>을(를) 참고합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiorecorderdelegate/audiorecorderendinterruption(_:withoptions:">init(name: String, transform: simd_float4x4, extent: simd_float3)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">설명적 이름이 포함된 새 앵커 객체를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arenvironmentprobeanchor/init(transform:extent:">View on Apple Developer</a>)*</span>
