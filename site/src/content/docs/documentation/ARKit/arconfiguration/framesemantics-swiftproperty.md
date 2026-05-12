---
source_path: "documentation/ARKit/arconfiguration/framesemantics-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:framesemantics:0000:0001">frameSemantics</span>

<span class="ko-segment" data-segment-id="seg:paragraph:framesemantics:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:framesemantics:0002:0001">프레임에서 활성화된 시맨틱 집합입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:framesemantics:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:framesemantics:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framesemantics:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framesemantics:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var frameSemantics: ARConfiguration.FrameSemantics { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If you don’t call <a href="avaudiosequencer/preparetoplay(">@@TOKEN_0@@</a>.md), the framework calls it and then starts the player.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">frame semantic을 활성화하기 전에 <a href="arconfiguration/supportsframesemantics(_:">@@TOKEN_0@@</a>.md) 를 호출해 장치 지원을 확인합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:enable-2d-body-detection:0009:0001">2D 바디 감지 활성화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-2d-body-detection:0010:0001">ARKit가 프레임에서 인식한 사람의 2D 위치 정보를 얻으려면 <a href="arconfiguration/framesemantics-swift.struct/bodydetection.md">@@TOKEN_0@@</a> frame semantic을 활성화합니다.</span>

```swift
if let config = mySession.configuration as? ARBodyTrackingConfiguration {
    config.frameSemantics.insert(.bodyDetection)
    // Run the configuration to effect a frame semantics change.
    mySession.run(config)
}

```

##### <span class="ko-segment" data-segment-id="seg:heading:enable-people-occlusion:0012:0001">사람 오클루전 활성화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0013:0001">사람 오클루전은 카메라 피드의 사람이 앱의 가상 콘텐츠를 가리도록 해주는 기능입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0014:0001">![가상 객체 앞에 서 있는 두 사람이 있는 카메라 피드를 보여주는 삽화.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0014:0002">왼쪽에서 가상 객체가 사람의 일부를 가려, 가상 객체가 실제 물리 환경에 배치된 것처럼 보이는 착시가 깨집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0014:0003">오른쪽에서는 사람이 가상 객체를 가려서, 가상 객체가 실제 물리 환경에 배치된 것처럼 보이는 착시가 유지됩니다. ](https://docs-assets.developer.apple.com/published/5193e10c0631586408ee15a863543416/media-3541708%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0015:0001">사람이 가상 콘텐츠보다 카메라에 더 가까울 때 사람의 콘텐츠가 앱의 가상 콘텐츠 위에 겹쳐 표시되어야 함을 나타내려면, 구성의 frame semantics에 <a href="ARConfiguration/FrameSemantics-swift.struct/personSegmentationWithDepth.md">@@TOKEN_0@@</a> 옵션을 추가합니다.</span>

```swift
if let config = mySession.configuration as? ARWorldTrackingConfiguration {
    config.frameSemantics.insert(.personSegmentationWithDepth)
    // Run the configuration to effect a frame semantics change.
    mySession.run(config)
}

```

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0017:0001">![카메라 피드에 가상 객체가 사이에 있는 두 사람이 있는 스크린샷.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0017:0002">가상 객체 앞의 사람은 가상 객체를 가리고, 가상 객체 뒤의 사람은 가상 객체에 의해 가려집니다.](https://docs-assets.developer.apple.com/published/4b7f06d0108afa1d653dbe1dd5ffb8b1/media-3541707%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0018:0001">사람이 장면 내에서 깊이값에 상관없이 앱의 가상 콘텐츠를 겹쳐 표시해야 함을 나타내려면 <a href="arconfiguration/framesemantics-swift.struct/personsegmentation.md">@@TOKEN_0@@</a> frame semantic을 대신 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0018:0002">이 옵션은 특히 그린 스크린 시나리오에 적합합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0019:0001">!<a href="https://docs-assets.developer.apple.com/published/13df4f15a3ec26839e6ce6e088661bd9/media-3541705%402x.png">카메라 피드에서 두 사람이 가상 배경 앞에 서 있는 스크린샷.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0020:0001">표준 렌더러(<a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_0@@</a>, 및 <a href="arscnview.md">@@TOKEN_1@@</a>)가 people occlusion을 대신 구현합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0020:0002"><a href="occluding-virtual-content-with-people.md">@@TOKEN_0@@</a>에서 RealityKit의 사람 오클루전을 시연하는 샘플 앱을 확인할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0021:0001">직접 렌더러를 구현하는 경우 사람 오클루전을 직접 구현하려면 <a href="arframe/segmentationbuffer.md">@@TOKEN_0@@</a> 및 <a href="arframe/estimateddepthdata.md">@@TOKEN_1@@</a>를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0021:0002"><a href="armattegenerator.md">@@TOKEN_0@@</a> 는 마스크를 제공하여 이를 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0021:0003">마스크 생성기와 사람 오클루전을 보여주는 샘플 앱은 <a href="effecting-people-occlusion-in-custom-renderers.md">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0022:0001">Scene Reconstruction을 활성화하면 ARKit는 카메라 피드에서 감지한 사람을 기준으로 메시를 조정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0022:0002">ARKit는 depth 포함 또는 미포함 frame semantics로 정의된 대로 장면 메시 중 사람과 겹치는 부분을 제거합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0022:0003">장면 재구성에 대한 자세한 내용은 <a href="visualizing-and-interacting-with-a-reconstructed-scene.md">@@TOKEN_0@@</a>를 참고합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0023:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="arconfiguration/framesemantics-swift.struct.md">ARConfiguration.FrameSemantics</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">앱에서 활성화할 수 있는 선택적 frame feature 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="arconfiguration/supportsframesemantics(_:">class func supportsFrameSemantics(ARConfiguration.FrameSemantics) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">특정 feature가 지원되는지 확인합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.property">View on Apple Developer</a>*</span>
