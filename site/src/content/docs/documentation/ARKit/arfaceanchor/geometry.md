---
source_path: "documentation/ARKit/arfaceanchor/geometry.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arfaceanchor/geometry"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:geometry:0000:0001">geometry</span>

<span class="ko-segment" data-segment-id="seg:paragraph:geometry:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:geometry:0002:0001">감지된 얼굴의 위상 구조를 나타내는 거친 삼각형 메시입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:geometry:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:geometry:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:geometry:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:geometry:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var geometry: ARFaceGeometry { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메시는 감지된 얼굴의 3D 형태를 설명하는 버텍스, 인덱스, 텍스처 좌표 버퍼를 제공하여 범용 얼굴 모델을 조정해 감지된 얼굴의 크기, 모양, 현재 표정에 맞춥니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이러한 버퍼를 선호하는 렌더링 엔진에 전달하여 얼굴 지오메트리를 시각화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">SceneKit을 사용해 얼굴 지오메트리를 시각화하려면 <a href="arscnfacegeometry.md">@@TOKEN_0@@</a> 인스턴스를 생성하고 <a href="arscnfacegeometry/update(from:">@@TOKEN_1@@</a>.md) 메서드를 사용해 얼굴 지오메트리에 맞게 업데이트합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">*<a href="https://developer.apple.com/documentation/arkit/arfaceanchor/geometry">View on Apple Developer</a>*</span>
