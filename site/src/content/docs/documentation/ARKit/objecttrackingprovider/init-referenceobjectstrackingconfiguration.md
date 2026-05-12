---
source_path: "documentation/ARKit/objecttrackingprovider/init-referenceobjectstrackingconfiguration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/objecttrackingprovider/init-referenceobjectstrackingconfiguration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initreferenceobjectstrackingconfiguration:0000:0001">init(referenceObjects:trackingConfiguration:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initreferenceobjectstrackingconfiguration:0001:0001">**Framework**: ARKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initreferenceobjectstrackingconfiguration:0002:0001">객체 추적 제공자를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initreferenceobjectstrackingconfiguration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initreferenceobjectstrackingconfiguration:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(referenceObjects: [ReferenceObject], trackingConfiguration: ObjectTrackingProvider.TrackingConfiguration? = nil)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">메서드는 추적 구성을 위해 지정한 숫자 매개변수 값이 지원 범위를 벗어나면 해당 값을 범위 내로 클램핑합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>referenceObjects</code>: 찾을 참조 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>trackingConfiguration</code>: 객체 추적 구성을 위한 선택적 매개변수입니다. 지정되지 않으면 프레임워크에서 기본값 세트를 적용합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/arkit/objecttrackingprovider/init(referenceobjects:trackingconfiguration:">View on Apple Developer</a>)*</span>
