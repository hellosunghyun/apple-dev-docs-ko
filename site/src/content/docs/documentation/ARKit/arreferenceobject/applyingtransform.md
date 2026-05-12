---
source_path: "documentation/ARKit/arreferenceobject/applyingtransform.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arreferenceobject/applyingtransform"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applyingtransform:0000:0001">applyingTransform(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyingtransform:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyingtransform:0002:0001">이 참조 객체의 기하학적 데이터에 지정된 변환을 적용해 새로 생성된 참조 객체를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyingtransform:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applyingtransform:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingtransform:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyingtransform:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func applyingTransform(_ transform: simd_float4x4) -> ARReferenceObject
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">변환된 참조 객체입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">참조 객체를 <a href="arworldmap.md">@@TOKEN_0@@</a>에서 추출할 때 해당 객체의 로컬 좌표계를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">기존 참조 객체의 로컬 좌표 원점이 객체의 의도된 사용에 적합하지 않은 경우, 이 메서드를 호출해 물리적 객체를 기준으로 참조 객체의 원점을 변경할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">ARKit가 참조 객체를 감지하면, 결과 <a href="arobjectanchor.md">@@TOKEN_0@@</a>의 <a href="aranchor/transform.md">@@TOKEN_1@@</a>은 참조 객체 좌표계의 원점을 기준으로 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">예를 들어, 참조 객체가 수평면 위에 놓인 실제 항목을 나타내는 경우 가상 콘텐츠는 실제 객체가 놓인 면 위에 있는 것처럼 표시되어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">따라서 일반적으로 참조 객체의 좌표 원점을 실제 객체의 하단에 맞추는 것이 유용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>transform</code>: 참조 객체의 로컬 좌표계에 있는 변환 행렬입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arreferenceobject/merging(_:">func merging(ARReferenceObject) throws -&gt; ARReferenceObject</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">이 참조 객체와 다른 참조 객체의 공간 정보를 결합한 새 참조 객체를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/arkit/arreferenceobject/applyingtransform(_:">View on Apple Developer</a>)*</span>
