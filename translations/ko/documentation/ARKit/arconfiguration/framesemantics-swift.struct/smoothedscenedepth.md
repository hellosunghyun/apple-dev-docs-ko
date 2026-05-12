---
source_path: "documentation/ARKit/arconfiguration/framesemantics-swift.struct/smoothedscenedepth.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct/smoothedscenedepth"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:smoothedscenedepth:0000:0001">smoothedSceneDepth</span>

<span class="ko-segment" data-segment-id="seg:paragraph:smoothedscenedepth:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:smoothedscenedepth:0002:0001">여러 프레임에 걸쳐 평균화된, 장치와 실제 세계 객체 간 거리를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:smoothedscenedepth:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:smoothedscenedepth:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:smoothedscenedepth:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:smoothedscenedepth:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var smoothedSceneDepth: ARConfiguration.FrameSemantics { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this property is <a href="https://developer.apple.com/documentation/ObjectiveC/nil-227m0">@@TOKEN_0@@</a> if switching between multiple output sources isn’t currently possible.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">ARKit은 LiDAR 스캐너를 사용해 이 거리를 샘플링하고, 그 결과를 세션의 <a href="arsession/currentframe.md">@@TOKEN_0@@</a>에 있는 <a href="arframe/smoothedscenedepth.md">@@TOKEN_1@@</a> property로 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/8b8b374954d1be372f7535eaf283fcd0/media-2929213%402x.png">None</a></span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">평균 판독값은 깊이로 객체를 묘사할 때 깜박임을 줄여 더 부드러운 motion 효과를 만들며, <a href="creating-a-fog-effect-using-scene-depth.md">@@TOKEN_0@@</a>에서 보여줍니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">대신, 프레임이 생성되는 순간의 이산 LiDAR 판독값에 접근하려면 <a href="arframe/scenedepth.md">@@TOKEN_0@@</a>를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">ARKit은 LiDAR 지원 기기에서만 scene depth를 지원하므로 scene depth를 활성화하려고 시도하기 전에 <a href="arconfiguration/supportsframesemantics(_:">@@TOKEN_0@@</a>.md)로 기기 지원 여부를 확인합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/setoutputdatasource(_:">static var sceneDepth: ARConfiguration.FrameSemantics</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">카메라를 통해 본 실제 세계 객체와 장치 간 거리를 제공하는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct/smoothedscenedepth">View on Apple Developer</a>*</span>
