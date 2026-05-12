---
source_path: "documentation/ARKit/arfacegeometry/init-blendshapes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arfacegeometry/init-blendshapes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initblendshapes:0000:0001">init(blendShapes:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initblendshapes:0001:0001">**Framework**: ARKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initblendshapes:0002:0001">지정된 딕셔너리에 설명된 얼굴 표정과 일치하는 얼굴 지오메트리를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initblendshapes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initblendshapes:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initblendshapes:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initblendshapes:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init?(blendShapes: [ARFaceAnchor.BlendShapeLocation : NSNumber])
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">현재 기기에서 ARKit 얼굴 추적이 지원되지 않으면 <code>nil</code>을 반환하는 얼굴 기하 객체입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>blendShapes</code> 딕셔너리의 각 키는 얼굴 특징을 식별하는 <a href="arfaceanchor/blendshapelocation.md">@@TOKEN_1@@</a> 상수입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">해당 값은 해당 특징의 중립 구성에 대한 위치로, <code>0.0</code>(중립)에서 <code>1.0</code>(최대 이동)까지의 범위를 가집니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 딕셔너리의 형식은 <a href="arfaceanchor.md">@@TOKEN_0@@</a> <a href="arfaceanchor/blendshapes.md">@@TOKEN_1@@</a> 속성에서 제공하는 형식과 동일합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">해당 속성과 이 초기화 메서드를 사용하면 얼굴 표정 데이터를 효율적으로 저장하고 복원할 수 있습니다. <code>blendShapes</code> 딕셔너리의 직렬화 형식은 해당 계수가 설명하는 얼굴 메시보다 이식성이 더 높습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>blendShapes</code>: 특정 얼굴 특징의 위치로 얼굴 표정을 설명하는 blend shape 계수의 딕셔너리입니다. 이 딕셔너리에 지정되지 않은 임의의 계수는 ARKit에서 <code>0.0</code>으로 간주합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arfacegeometry/init(blendshapes:">Apple Developer에서 보기</a>)*</span>
