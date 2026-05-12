---
source_path: "documentation/ARKit/arbodytrackingconfiguration/automaticimagescaleestimationenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration/automaticimagescaleestimationenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:automaticimagescaleestimationenabled:0000:0001">automaticImageScaleEstimationEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticimagescaleestimationenabled:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticimagescaleestimationenabled:0002:0001">ARKit에 추적 중인 이미지의 스케일을 대신 추정해 설정하도록 지시하는 플래그입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticimagescaleestimationenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:automaticimagescaleestimationenabled:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticimagescaleestimationenabled:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticimagescaleestimationenabled:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var automaticImageScaleEstimationEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The <a href="arworldmap/extent.md">@@TOKEN_0@@</a> and <a href="arworldmap/center.md">@@TOKEN_1@@</a> properties together define a bounding box for the data recorded in the reference object in its local coordinate system.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">참조 이미지의 서로 다른 크기 버전을 감지하려면 이 속성을 활성화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">ARKit는 실세계에서 이미지의 실제 크기를 알아야 이미지의 실세계 위치를 정확히 추정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">이 속성을 사용하면 ARKit가 실세계 위치를 계산하기 전에 인식된 이미지의 실제 크기를 추정하도록 지시할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arbodytrackingconfiguration/detectionimages.md">var detectionImages: Set&lt;ARReferenceImage&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">ARKit가 사용자의 환경에서 검색하는 이미지 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arbodytrackingconfiguration/maximumnumberoftrackedimages.md">var maximumNumberOfTrackedImages: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">위치 및 방향 업데이트를 밀접하게 모니터링할 이미지 앵커 개수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration/automaticimagescaleestimationenabled">View on Apple Developer</a>*</span>
