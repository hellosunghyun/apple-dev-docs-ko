---
source_path: "documentation/ARKit/arfaceanchor/blendshapes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:blendshapes:0000:0001">blendShapes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blendshapes:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blendshapes:0002:0001">특정 얼굴 특징의 이동을 기준으로 감지된 얼굴 표정을 나타내는 명명된 계수의 사전입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blendshapes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:blendshapes:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blendshapes:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blendshapes:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var blendShapes: [ARFaceAnchor.BlendShapeLocation : NSNumber] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 사전의 각 키( <a href="arfaceanchor/blendshapelocation.md">@@TOKEN_0@@</a> 상수)는 ARKit이 인식하는 여러 얼굴 특징 중 하나를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">각 키에 해당하는 값은 해당 특징의 중립 구성 대비 현재 위치를 나타내는 부동 소수점 숫자이며, 범위는 <code>0.0</code>(중립)에서 <code>1.0</code>(최대 이동)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">If you implement a custom renderer, you apply this property by using alpha and depth mattes provided with <a href="armattegenerator.md">@@TOKEN_0@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">ARKit은 얼굴 표정의 세밀한 모델을 구현하기 위해 많은 blend shape 계수를 제공합니다. 그러나 시각 효과를 만들 때 원하는 개수만큼의 계수를 자유롭게 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">예를 들어 <a href="arfaceanchor/blendshapelocation/jawopen.md">@@TOKEN_0@@</a>, <a href="arfaceanchor/blendshapelocation/eyeblinkleft.md">@@TOKEN_1@@</a>, <a href="arfaceanchor/blendshapelocation/eyeblinkright.md">@@TOKEN_2@@</a> 계수만 사용해 간단한 만화 캐릭터를 애니메이션할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0004">전문 3D 아티스트는 더 큰 계수 집합이나 전체 집합을 사용해 실제감 있는 애니메이션이 가능한 정밀한 캐릭터 모델을 제작할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">또한 blend shape 계수를 사용해 특정 얼굴 표정을 기록한 뒤 나중에 재사용할 수도 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002"><a href="arfacegeometry.md">@@TOKEN_0@@</a> <a href="arfacegeometry/init(blendshapes:">@@TOKEN_1@@</a>.md) 초기화 메서드는 이 속성 값과 동등한 사전으로부터 상세한 3D 메시를 생성합니다. blend shape 사전의 직렬화된 형태는 해당 계수들이 설명하는 얼굴 메시의 직렬화 형태보다 이식성이 더 높습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arfaceanchor/blendshapelocation.md">ARFaceAnchor.BlendShapeLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">특정 얼굴 특징의 식별자로, 해당 특징의 상대적 이동을 나타내는 계수와 함께 사용합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapes">View on Apple Developer</a>*</span>
