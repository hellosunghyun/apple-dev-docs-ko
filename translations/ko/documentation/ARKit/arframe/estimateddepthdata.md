---
source_path: "documentation/ARKit/arframe/estimateddepthdata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arframe/estimateddepthdata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:estimateddepthdata:0000:0001">estimatedDepthData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimateddepthdata:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimateddepthdata:0002:0001">가상 콘텐츠를 가리는 데 사용하는 카메라 피드의 추정 깊이 값을 나타내는 버퍼입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimateddepthdata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:estimateddepthdata:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:estimateddepthdata:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:estimateddepthdata:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var estimatedDepthData: CVPixelBuffer? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">분할 버퍼의 비배경 픽셀 각각은 이 버퍼의 깊이 값에 매핑됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 값을 사용해 앱의 가상 콘텐츠 렌더링에서 사람을 가립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">사용자 지정 렌더러를 구현하는 경우 <a href="armattegenerator.md">@@TOKEN_0@@</a>에서 제공하는 alpha 및 depth 마트를 사용해 이 속성을 적용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">표준 렌더러 중 하나를 사용하는 앱은 사람과 가상 콘텐츠를 가리는 데 이 속성이 필요하지 않습니다. 표준 렌더러(<a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_0@@</a>, <a href="arscnview.md">@@TOKEN_1@@</a>, <a href="arskview.md">@@TOKEN_2@@</a>)는 구성의 <a href="arconfiguration/framesemantics-swift.property.md">@@TOKEN_3@@</a>에 <a href="arconfiguration/framesemantics-swift.struct/personsegmentation.md">@@TOKEN_4@@</a> 또는 <a href="arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md">@@TOKEN_5@@</a>를 추가하면 사람 가림을 활성화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">표준 렌더러(<a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_0@@</a>, <a href="arscnview.md">@@TOKEN_1@@</a>, <a href="arskview.md">@@TOKEN_2@@</a>)는 구성의 <a href="arconfiguration/framesemantics-swift.property.md">@@TOKEN_3@@</a>에 <a href="arconfiguration/framesemantics-swift.struct/personsegmentation.md">@@TOKEN_4@@</a> 또는 <a href="arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md">@@TOKEN_5@@</a>을 추가하면 사람 오클루전을 활성화합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arframe/detectedbody.md">var detectedBody: ARBody2D?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">ARKit가 카메라 이미지에서 인식한 신체의 화면 위치 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arbody2d.md">class ARBody2D</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">ARKit가 카메라 피드에서 인식한 사람의 화면 공간 표현입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arframe/segmentationbuffer.md">var segmentationBuffer: CVPixelBuffer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">가상 콘텐츠를 가리는 데 사용되는 카메라 피드 객체의 형태를 식별하는 픽셀 정보를 포함하는 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arframe/segmentationclass.md">ARFrame.SegmentationClass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">앱의 가상 콘텐츠를 가리는 데 사용하는 콘텐츠 유형을 정의하는 픽셀의 분류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/arkit/arframe/estimateddepthdata">View on Apple Developer</a>*</span>
