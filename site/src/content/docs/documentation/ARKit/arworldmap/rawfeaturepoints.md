---
source_path: "documentation/ARKit/arworldmap/rawfeaturepoints.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arworldmap/rawfeaturepoints"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rawfeaturepoints:0000:0001">rawFeaturePoints</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rawfeaturepoints:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rawfeaturepoints:0002:0001">월드 맵에 기록된 공간 매핑 데이터의 대략적인 표현입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rawfeaturepoints:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rawfeaturepoints:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rawfeaturepoints:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rawfeaturepoints:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rawFeaturePoints: ARPointCloud { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 점들은 월드 맵을 기록한 세션 중 카메라 이미지에서 감지된 특징적인 지점을 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">ARKit은 세션에서 장치의 이동을 추적하는 이미지 및 동작 분석의 일부로 이러한 특징의 위치를 3D 월드 좌표 공간에서 외삽합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 점들은 함께 볼 때 세션 동안 카메라에서 관측된 실제 객체의 윤곽을 대체로 추정할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">ARKit은 소프트웨어 릴리스 간 raw feature points의 개수와 배치가 안정적으로 유지된다는 것을 보장하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">그러나 포인트 클라우드를 시각화하여 월드 맵 기록을 디버그하거나, 크기를 확인하여 기록된 월드 맵의 품질을 추정할 수 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">*<a href="https://developer.apple.com/documentation/arkit/arworldmap/rawfeaturepoints">View on Apple Developer</a>*</span>
