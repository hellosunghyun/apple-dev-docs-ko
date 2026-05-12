---
source_path: "documentation/ARKit/objectanchor/boundingbox.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/objectanchor/boundingbox"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:boundingbox:0000:0001">boundingBox</span>

<span class="ko-segment" data-segment-id="seg:paragraph:boundingbox:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:boundingbox:0002:0001">앵커의 경계 상자입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:boundingbox:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:boundingbox:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var boundingBox: ObjectAnchor.AxisAlignedBoundingBox { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="objectanchor/axisalignedboundingbox.md">ObjectAnchor.AxisAlignedBoundingBox</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">축 정렬 경계 상자를 설명하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="objectanchor/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 anchor의 텍스트 표현입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="objectanchor/istracked.md">var isTracked: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">프레임워크가 현재 객체 anchor를 추적하고 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="objectanchor/originfromanchortransform.md">var originFromAnchorTransform: simd_float4x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">객체 anchor에서 원점 좌표계로의 transform입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="objectanchor/referenceobject.md">var referenceObject: ReferenceObject</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">anchor에 해당하는 참조 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="referenceobject/inputfile.md">var inputFile: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">프레임워크가 참조 객체를 로드할 때 사용하는 입력 파일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="referenceobject/usdzfile.md">var usdzFile: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">참조 객체에 USDZ 파일이 포함되어 있는 경우의 훈련된 USDZ 파일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="referenceobject.md">struct ReferenceObject</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">프레임워크가 추적할 수 있는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/arkit/objectanchor/boundingbox">View on Apple Developer</a>*</span>
