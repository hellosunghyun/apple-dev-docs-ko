---
source_path: "documentation/ARKit/arfaceanchor/blendshapelocation/mouthpucker.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/mouthpucker"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mouthpucker:0000:0001">mouthPucker</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mouthpucker:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mouthpucker:0002:0001">양쪽 입술이 닫힌 상태에서 수축하고 압축되는 정도를 나타내는 계수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mouthpucker:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mouthpucker:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mouthpucker:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mouthpucker:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let mouthPucker: ARFaceAnchor.BlendShapeLocation
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">아래 그림은 <a href="arscnfacegeometry.md">@@TOKEN_0@@</a>를 참고한 얼굴 메시의 두 상태를 보여주며, 이 계수의 값이 <code>0.0</code>과 <code>1.0</code>인 예시입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">두 상태 모두에서 다른 모든 <a href="arfaceanchor/blendshapelocation.md">@@TOKEN_0@@</a> 계수 값은 <code>0.0</code>으로 설정됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/a0f8ffd20bc148bba761a2f4dde31636/media-2930070%402x.png">None</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arfaceanchor/blendshapelocation/jawforward.md">static let jawForward: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">아래턱의 전방 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arfaceanchor/blendshapelocation/jawleft.md">static let jawLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">아래턱의 왼쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arfaceanchor/blendshapelocation/jawright.md">static let jawRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">아래턱의 오른쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="arfaceanchor/blendshapelocation/jawopen.md">static let jawOpen: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">아래턱의 개방을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="arfaceanchor/blendshapelocation/mouthclose.md">static let mouthClose: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">입술이 닫힘을 나타내는 계수이며, 턱 위치와 무관합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="arfaceanchor/blendshapelocation/mouthfunnel.md">static let mouthFunnel: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">입술 둘 다를 벌린 모양으로 수축하는 것을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="arfaceanchor/blendshapelocation/mouthleft.md">static let mouthLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">두 입술이 함께 좌측으로 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="arfaceanchor/blendshapelocation/mouthright.md">static let mouthRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">두 입술이 함께 우측으로 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="arfaceanchor/blendshapelocation/mouthsmileleft.md">static let mouthSmileLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">입술 왼쪽 모서리가 위로 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="arfaceanchor/blendshapelocation/mouthsmileright.md">static let mouthSmileRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">입술 오른쪽 모서리가 위로 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="arfaceanchor/blendshapelocation/mouthfrownleft.md">static let mouthFrownLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">입술 왼쪽 모서리가 아래로 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="arfaceanchor/blendshapelocation/mouthfrownright.md">static let mouthFrownRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">입술 오른쪽 모서리가 아래로 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="arfaceanchor/blendshapelocation/mouthdimpleleft.md">static let mouthDimpleLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">입술 왼쪽 모서리가 뒤쪽으로 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="arfaceanchor/blendshapelocation/mouthdimpleright.md">static let mouthDimpleRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">입술 오른쪽 모서리가 뒤쪽으로 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="arfaceanchor/blendshapelocation/mouthstretchleft.md">static let mouthStretchLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">입술 왼쪽 모서리가 좌측으로 움직임을 나타내는 계수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/mouthpucker">View on Apple Developer</a>*</span>
