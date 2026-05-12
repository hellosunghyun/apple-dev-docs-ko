---
source_path: "documentation/ARKit/arplanegeometry/triangleindices-64epx.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arplanegeometry/triangleindices-64epx"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:triangleindices:0000:0001">triangleIndices</span>

<span class="ko-segment" data-segment-id="seg:paragraph:triangleindices:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:triangleindices:0002:0001">평면 메시의 정점 데이터로 구성된 삼각형 메시를 설명하는 인덱스 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:triangleindices:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:triangleindices:0004:0001">iOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:triangleindices:0004:0002">iPadOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:triangleindices:0004:0003">Mac Catalyst 11.3+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
var triangleIndices: [Int16] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 배열의 각 16비트 정수 값은 <a href="arplanegeometry/vertices-43kle.md">@@TOKEN_0@@</a>와 <a href="arplanegeometry/texturecoordinates-p801.md">@@TOKEN_1@@</a> 배열에 대한 인덱스를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">세 개의 인덱스 집합은 메시에서 단일 삼각형을 구성하는 정점을 식별합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 배열은 GPU 기반 렌더링에서 삼각형 메시의 인덱스 버퍼로 사용하거나 3D 모델 에셋 파일을 만들 때 사용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">세 개의 인덱스가 하나의 삼각형을 구성하므로, <a href="arplanegeometry/triangleindices-64epx.md">@@TOKEN_0@@</a> 배열의 인덱스 수는 <a href="arplanegeometry/trianglecount.md">@@TOKEN_1@@</a> 값의 세 배입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001">[var vertices: [simd_float3]](arplanegeometry/vertices-43kle.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">평면 메시의 각 점에 대한 정점 위치 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[var textureCoordinates: [vector_float2]](arplanegeometry/texturecoordinates-p801.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">평면 메시의 각 점에 대한 텍스처 좌표 값 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arplanegeometry/trianglecount.md">var triangleCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001"><a href="arplanegeometry/triangleindices-1azi3.md">@@TOKEN_0@@</a> 버퍼로 설명되는 삼각형 개수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/arkit/arplanegeometry/triangleindices-64epx">View on Apple Developer</a>*</span>
