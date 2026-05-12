---
source_path: "documentation/ARKit/arreferenceobject/rawfeaturepoints.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arreferenceobject/rawfeaturepoints"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rawfeaturepoints:0000:0001">rawFeaturePoints</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rawfeaturepoints:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rawfeaturepoints:0002:0001">참조 객체에 포함된 공간 매핑 데이터의 거친 표현입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rawfeaturepoints:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rawfeaturepoints:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rawfeaturepoints:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rawfeaturepoints:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rawFeaturePoints: ARPointCloud { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If you don’t call <a href="avaudiosequencer/preparetoplay(">@@TOKEN_0@@</a>.md), the framework calls it and then starts the player.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">ARKit는 세션에서 디바이스 이동을 추적하는 이미지 및 모션 분석의 일부로, 이러한 feature의 위치를 3D 월드 좌표 공간에서 외삽합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 점들을 함께 보면 세션 중 카메라 시야에 있었던 실제 물체의 윤곽과 대략적으로 상응합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">ARKit는 raw feature point의 수와 배치가 소프트웨어 릴리스 간에 안정적으로 유지된다는 것을 보장하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">그러나 앱의 객체 기록이나 감지를 디버그하기 위해 포인트 클라우드를 시각화하거나, 크기를 확인해 기록된 객체의 품질을 추정할 수 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">*<a href="https://developer.apple.com/documentation/arkit/arreferenceobject/rawfeaturepoints">View on Apple Developer</a>*</span>
