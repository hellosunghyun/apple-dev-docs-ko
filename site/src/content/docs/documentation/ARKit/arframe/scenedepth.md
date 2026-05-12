---
source_path: "documentation/ARKit/arframe/scenedepth.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arframe/scenedepth"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:scenedepth:0000:0001">sceneDepth</span>

<span class="ko-segment" data-segment-id="seg:paragraph:scenedepth:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:scenedepth:0002:0001">AR 경험에서 장치의 후면 카메라와 현실 객체 간의 거리 데이터입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:scenedepth:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:scenedepth:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:scenedepth:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:scenedepth:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var sceneDepth: ARDepthData? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The framework clamps this to between <code>0</code> and <code>30</code> Hz.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Otherwise, ARKit automatically corrects the image anchor’s transform when <code>estimatedScaleFactor</code> is a value other than 1.0.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002"><a href="arconfiguration/framesemantics-swift.struct/scenedepth.md">@@TOKEN_0@@</a> 프레임 시맨틱을 구성의 <a href="arconfiguration/framesemantics-swift.property.md">@@TOKEN_1@@</a>에 추가하여 프레임워크가 LiDAR 스캐너로 캡처한 <a href="ardepthdata.md">@@TOKEN_2@@</a>로 이 값을 채우도록 지시합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">See <a href="arworldtrackingconfiguration/automaticimagescaleestimationenabled.md">@@TOKEN_0@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arframe/lightestimate.md">var lightEstimate: ARLightEstimate?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">카메라 이미지 기반으로 조명 조건을 추정한 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arframe/displaytransform(for:viewportsize:">func displayTransform(for: UIInterfaceOrientation, viewportSize: CGSize) -&gt; CGAffineTransform</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">카메라 이미지를 화면에 렌더링할 때 정규화된 이미지 좌표와 렌더링에 적합한 좌표 공간을 서로 변환하는 affine transform을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arframe/rawfeaturepoints.md">var rawFeaturePoints: ARPointCloud?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">ARKit가 world tracking을 수행하기 위해 사용하는 장면 분석의 현재 중간 결과입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arframe/captureddepthdata.md">var capturedDepthData: AVDepthData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">전면 카메라 경험에서 캡처된 깊이 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="arframe/captureddepthdatatimestamp.md">var capturedDepthDataTimestamp: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">해당 프레임의 깊이 데이터(해당되는 경우)가 캡처된 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="arframe/smoothedscenedepth.md">var smoothedSceneDepth: ARDepthData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">AR 경험에서 더 부드러운 시각 결과를 만들기 위해 장치의 후면 카메라와 현실 객체 간의 거리 측정값을 평균한 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/arkit/arframe/scenedepth">View on Apple Developer</a>*</span>
