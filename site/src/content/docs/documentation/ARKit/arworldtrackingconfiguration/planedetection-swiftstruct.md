---
source_path: "documentation/ARKit/arworldtrackingconfiguration/planedetection-swiftstruct.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/planedetection-swiftstruct"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arworldtrackingconfigurationplanedetection:0000:0001">ARWorldTrackingConfiguration.PlaneDetection</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arworldtrackingconfigurationplanedetection:0001:0001">**Framework**: ARKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arworldtrackingconfigurationplanedetection:0002:0001">캡처된 이미지에서 프레임워크가 평면을 감지하는 방식 및 감지 여부를 지정하는 옵션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arworldtrackingconfigurationplanedetection:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arworldtrackingconfigurationplanedetection:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arworldtrackingconfigurationplanedetection:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arworldtrackingconfigurationplanedetection:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct PlaneDetection
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">Use this structure to access information about a sample from a <a href="cameraframe.md">@@TOKEN_0@@</a>, such as the frame’s settings and parameters, a pixel buffer that contains the sample’s data, and so on.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">수평 또는 수직 평면 감지를 사용하도록 설정하면, 세션은 ARPlaneAnchor 객체를 추가하고 캡처한 비디오 이미지 분석에서 평면처럼 보이는 영역을 감지할 때 ARSessionDelegate, ARSCNViewDelegate 또는 ARSKViewDelegate 객체에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">평면 감지를 사용하지 않으려면 빈 세트 리터럴 <code>[]</code>을 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:plane-detection-option-creation:0011:0001">평면 감지 옵션 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-detection-option-creation:0012:0001"><a href="arworldtrackingconfiguration/planedetection-swift.struct/init(rawvalue:">init(rawValue: UInt)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-detection-option-creation:0013:0001">평면 감지 옵션을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:plane-detection-options:0014:0001">평면 감지 옵션</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-detection-options:0015:0001"><a href="arworldtrackingconfiguration/planedetection-swift.struct/horizontal.md">static var horizontal: ARWorldTrackingConfiguration.PlaneDetection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-detection-options:0016:0001">세션은 중력에 수직인 평면 표면을 감지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-detection-options:0017:0001"><a href="arworldtrackingconfiguration/planedetection-swift.struct/vertical.md">static var vertical: ARWorldTrackingConfiguration.PlaneDetection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-detection-options:0018:0001">세션은 다른 방향과 관계없이 중력과 평행인 표면을 감지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-detection-options:0019:0001"><a href="arworldtrackingconfiguration/planedetection-swift.struct/horizontal.md">static var horizontal: ARWorldTrackingConfiguration.PlaneDetection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-detection-options:0020:0001">세션은 중력에 수직인 평면 표면을 감지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-detection-options:0021:0001"><a href="arworldtrackingconfiguration/planedetection-swift.struct/vertical.md">static var vertical: ARWorldTrackingConfiguration.PlaneDetection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-detection-options:0022:0001">세션은 다른 방향과 관계없이 중력과 평행인 표면을 감지합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0023:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0024:0001">준수 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0003"><a href="../Swift/ExpressibleByArrayLiteral.md">ExpressibleByArrayLiteral</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0004"><a href="../Swift/OptionSet.md">OptionSet</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0005"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0006"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0007"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0008"><a href="../Swift/SetAlgebra.md">SetAlgebra</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0026:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="arbodytrackingconfiguration/planedetection.md">var planeDetection: ARWorldTrackingConfiguration.PlaneDetection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">카메라 캡처 이미지에서 세션이 평면 표면을 자동으로 감지하려고 시도하는 방식과 여부를 지정하는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/planedetection-swift.struct">View on Apple Developer</a>*</span>
