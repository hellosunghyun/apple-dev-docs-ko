---
source_path: "documentation/ARKit/handskeleton.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/handskeleton"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:handskeleton:0000:0001">HandSkeleton</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handskeleton:0001:0001">**Framework**: ARKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handskeleton:0002:0001">손의 관절 모음입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handskeleton:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:handskeleton:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct HandSkeleton
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:retrieving-specific-hand-joints:0008:0001">특정 손 관절 검색</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-specific-hand-joints:0009:0001"><a href="handskeleton/joint(_:">func joint(HandSkeleton.JointName) -&gt; HandSkeleton.Joint</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-specific-hand-joints:0010:0001">지정한 관절 이름을 기준으로 손 관절을 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-specific-hand-joints:0011:0001"><a href="handskeleton/joint.md">HandSkeleton.Joint</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-specific-hand-joints:0012:0001">개별 손 관절의 이름과 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-specific-hand-joints:0013:0001"><a href="handskeleton/jointname.md">HandSkeleton.JointName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-specific-hand-joints:0014:0001">다양한 손 관절의 이름입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-hand-skeletons:0015:0001">손 스켈레톤 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-hand-skeletons:0016:0001">[var allJoints: [HandSkeleton.Joint]](handskeleton/alljoints.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-hand-skeletons:0017:0001">손 스켈레톤의 모든 관절입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-hand-skeletons:0018:0001"><a href="handskeleton/neutralpose.md">static var neutralPose: HandSkeleton</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-hand-skeletons:0019:0001">참조로 사용할 수 있는 손 포즈입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-hand-skeletons:0020:0001"><a href="handskeleton/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-hand-skeletons:0021:0001">이 Skeleton의 텍스트 표현입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0023:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0001"><a href="../Swift/Copyable.md">Copyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0002"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0003"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0004"><a href="../Swift/Escapable.md">Escapable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="../visionOS/happybeam.md">Happy Beam</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">ARKit를 사용해 Full Space를 활용해 재미있는 게임을 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="../visionOS/creating-a-painting-space-in-visionos.md">Creating a 3D painting space</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">페인팅 캔버스 엔터티를 구현하고 메시를 획을 나타내도록 업데이트합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="../visionOS/tracking-and-visualizing-hand-movement.md">Tracking and visualizing hand movement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">visionOS에서 hand transform의 시각적 표현을 표시하려면 hand-tracking anchor를 사용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="handtrackingprovider.md">class HandTrackingProvider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">사람의 손과 손 관절 위치에 대한 실시간 데이터 소스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="handanchor.md">struct HandAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">사람의 주변 환경에서 손의 위치입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/arkit/handskeleton">View on Apple Developer</a>*</span>
