---
source_path: "documentation/ARKit/arplaneanchor/classification-swift.enum/status/unknown.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arplaneanchor/classification-swift.enum/status/unknown"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arplaneanchorclassificationstatusunknown:0000:0001">ARPlaneAnchor.Classification.Status.unknown</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arplaneanchorclassificationstatusunknown:0001:0001">**Framework**: ARKit **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arplaneanchorclassificationstatusunknown:0002:0001">ARKit은 평면 앵커에 대한 분류 프로세스를 완료했지만 결과가 불분명합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arplaneanchorclassificationstatusunknown:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arplaneanchorclassificationstatusunknown:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arplaneanchorclassificationstatusunknown:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arplaneanchorclassificationstatusunknown:0004:0003">Mac Catalyst 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case unknown
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">ARKit은 감지된 평면을 제한된 수의 공통 카테고리 집합으로 분류하려고 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">그러나 감지된 평면이 해당 카테고리 중 어느 것에도 해당하지 않는 실제 객체일 수 있거나, 평면 분류 과정에서 이를 인식하지 못할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 경우 평면 앵커의 <a href="arplaneanchor/classification-2hi2p.md">@@TOKEN_0@@</a>은 연관 값이 <a href="arplaneanchor/classification-swift.enum/status/unknown.md">@@TOKEN_1@@</a>인 <a href="arplaneanchor/classification-swift.enum/none(_:">@@TOKEN_2@@</a>.md)입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">추가 참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arplaneanchor/classification-swift.enum/status/notavailable.md">ARPlaneAnchor.Classification.Status.notAvailable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">ARKit은 현재 평면 분류 정보를 제공할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arplaneanchor/classification-swift.enum/status/undetermined.md">ARPlaneAnchor.Classification.Status.undetermined</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">ARKit은 아직 평면 앵커에 대한 분류를 생성하지 않았습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arplaneanchor/classification-swift.enum/status/unknown">View on Apple Developer</a>*</span>
