---
source_path: "documentation/ARKit/arfaceanchor/blendshapelocation/jawforward.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/jawforward"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:jawforward:0000:0001">jawForward</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jawforward:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jawforward:0002:0001">아래턱의 전방 이동을 나타내는 계수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jawforward:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:jawforward:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:jawforward:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:jawforward:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let jawForward: ARFaceAnchor.BlendShapeLocation
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">아래 그림은 <code>jawForward</code> 계수에서 <code>0.0</code> 및 <code>1.0</code> 값이 적용된 두 가지 상태의 얼굴 기하 구조를 보여줍니다(<a href="arscnfacegeometry.md">@@TOKEN_3@@</a>).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">두 상태 모두에서 다른 모든 <a href="arfaceanchor/blendshapelocation.md">@@TOKEN_0@@</a> 계수의 값은 <code>0.0</code>으로 설정됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/cfc0fa5b4baac25e419420436ee31705/media-2930046%402x.png">None</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arfaceanchor/blendshapelocation/jawleft.md">static let jawLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">아래턱의 왼쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arfaceanchor/blendshapelocation/jawright.md">static let jawRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">아래턱의 오른쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arfaceanchor/blendshapelocation/jawopen.md">static let jawOpen: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">아래턱의 개방을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="arfaceanchor/blendshapelocation/mouthclose.md">static let mouthClose: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">입술의 닫힘을 하악 위치와 독립적으로 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="arfaceanchor/blendshapelocation/mouthfunnel.md">static let mouthFunnel: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">양쪽 입술을 벌린 형태로 수축시키는 동작을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="arfaceanchor/blendshapelocation/mouthpucker.md">static let mouthPucker: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">양쪽 닫힌 입술의 수축과 압축을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="arfaceanchor/blendshapelocation/mouthleft.md">static let mouthLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">양쪽 입술을 함께 왼쪽으로 움직이는 동작을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="arfaceanchor/blendshapelocation/mouthright.md">static let mouthRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">양쪽 입술을 함께 오른쪽으로 움직이는 동작을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="arfaceanchor/blendshapelocation/mouthsmileleft.md">static let mouthSmileLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">입술 왼쪽 모서리의 위쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="arfaceanchor/blendshapelocation/mouthsmileright.md">static let mouthSmileRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">입술 오른쪽 모서리의 위쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="arfaceanchor/blendshapelocation/mouthfrownleft.md">static let mouthFrownLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">입술 왼쪽 모서리의 아래쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="arfaceanchor/blendshapelocation/mouthfrownright.md">static let mouthFrownRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">입술 오른쪽 모서리의 아래쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="arfaceanchor/blendshapelocation/mouthdimpleleft.md">static let mouthDimpleLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">입술 왼쪽 모서리의 뒤쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="arfaceanchor/blendshapelocation/mouthdimpleright.md">static let mouthDimpleRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">입술 오른쪽 모서리의 뒤쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="arfaceanchor/blendshapelocation/mouthstretchleft.md">static let mouthStretchLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">입술 왼쪽 모서리의 왼쪽 이동을 나타내는 계수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/jawforward">View on Apple Developer</a>*</span>
