---
source_path: "documentation/ARKit/arfaceanchor/blendshapelocation/browinnerup.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/browinnerup"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:browinnerup:0000:0001">browInnerUp</span>

<span class="ko-segment" data-segment-id="seg:paragraph:browinnerup:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:browinnerup:0002:0001">양쪽 눈썹 안쪽의 위쪽 움직임을 나타내는 계수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:browinnerup:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:browinnerup:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:browinnerup:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:browinnerup:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let browInnerUp: ARFaceAnchor.BlendShapeLocation
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">아래 그림은 <a href="arscnfacegeometry.md">@@TOKEN_0@@</a>에서 얼굴 지오메트리를 두 상태로 표시하여 이 계수의 값이 <code>0.0</code>과 <code>1.0</code>인 모습을 보여줍니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">For more information on ARKit’s coordinate space, see <a href="arsession/setworldorigin(relativetransform:">@@TOKEN_0@@</a>.md).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">To succeed, this function requires an <a href="argeotrackingconfiguration.md">@@TOKEN_0@@</a> session with state equal to <a href="argeotrackingstatus/state-swift.enum/localized.md">@@TOKEN_1@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arfaceanchor/blendshapelocation/browdownleft.md">static let browDownLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">왼쪽 눈썹 바깥쪽의 아래쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arfaceanchor/blendshapelocation/browdownright.md">static let browDownRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">오른쪽 눈썹 바깥쪽의 아래쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arfaceanchor/blendshapelocation/browouterupleft.md">static let browOuterUpLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">왼쪽 눈썹 바깥쪽의 위쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="arfaceanchor/blendshapelocation/browouterupright.md">static let browOuterUpRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">오른쪽 눈썹 바깥쪽의 위쪽 이동을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="arfaceanchor/blendshapelocation/cheekpuff.md">static let cheekPuff: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">양쪽 볼의 바깥쪽 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="arfaceanchor/blendshapelocation/cheeksquintleft.md">static let cheekSquintLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">왼쪽 눈 주변 및 아래쪽의 볼 위쪽 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="arfaceanchor/blendshapelocation/cheeksquintright.md">static let cheekSquintRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">오른쪽 눈 주변 및 아래쪽의 볼 위쪽 움직임을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="arfaceanchor/blendshapelocation/nosesneerleft.md">static let noseSneerLeft: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">왼쪽 콧구멍 주변, 코의 왼쪽 부분이 들리는 현상을 나타내는 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="arfaceanchor/blendshapelocation/nosesneerright.md">static let noseSneerRight: ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">오른쪽 콧구멍 주변, 코의 오른쪽 부분이 들리는 현상을 나타내는 계수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/browinnerup">View on Apple Developer</a>*</span>
