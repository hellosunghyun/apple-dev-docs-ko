---
source_path: "documentation/ARKit/arcamera/projectionmatrix.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arcamera/projectionmatrix"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:projectionmatrix:0000:0001">projectionMatrix</span>

<span class="ko-segment" data-segment-id="seg:paragraph:projectionmatrix:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:projectionmatrix:0002:0001">카메라로 캡처한 이미지와 일치하도록 3D 콘텐츠를 렌더링하기에 적합한 변환 행렬입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:projectionmatrix:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:projectionmatrix:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:projectionmatrix:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:projectionmatrix:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var projectionMatrix: simd_float4x4 { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성의 값을 읽으면 카메라의 <a href="arcamera/imageresolution.md">@@TOKEN_0@@</a> 및 <a href="arcamera/intrinsics.md">@@TOKEN_1@@</a> 속성을 사용해 크기와 방향을 유도하고, 근거리 및 원거리 클리핑 평면의 기본값으로 <code>0.001</code>, <code>1000.0</code>을 전달한 다음 <code>projectionMatrix(withViewportSize:orientation:zNear:zFar:)</code> 메서드를 호출한 것과 동일합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arcamera/projectionmatrix(for:viewportsize:znear:zfar:">func projectionMatrix(for: UIInterfaceOrientation, viewportSize: CGSize, zNear: CGFloat, zFar: CGFloat) -&gt; simd_float4x4</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정한 매개변수를 사용해 카메라로 캡처한 이미지와 일치하도록 3D 콘텐츠를 렌더링하기 위한 변환 행렬을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="referenceimage/init(cgimage:physicalsize:orientation:">func viewMatrix(for: UIInterfaceOrientation) -&gt; simd_float4x4</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">월드 공간에서 카메라 공간으로 변환하는 변환 행렬을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="referenceimage/init(pixelbuffer:physicalsize:orientation:">func projectPoint(simd_float3, orientation: UIInterfaceOrientation, viewportSize: CGSize) -&gt; CGPoint</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">ARKit이 감지한 3D 월드 공간의 점을 장면을 렌더링하는 보기의 2D 공간으로 투영한 결과를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arcamera/unprojectpoint(_:ontoplane:orientation:viewportsize:">func unprojectPoint(CGPoint, ontoPlane: simd_float4x4, orientation: UIInterfaceOrientation, viewportSize: CGSize) -&gt; simd_float3?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/referenceimage/loadreferenceimages(ingroupnamed:bundle:">View on Apple Developer</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/arkit/arcamera/projectionmatrix">View on Apple Developer</a>*</span>
