---
source_path: "documentation/ARKit/arscnview.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arscnview"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arscnview:0000:0001">ARSCNView</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arscnview:0001:0001">**Framework**: ARKit **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arscnview:0002:0001">SceneKit의 가상 3D 콘텐츠를 AR 경험에 결합하는 뷰입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arscnview:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arscnview:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arscnview:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arscnview:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class ARSCNView
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0008:0001">❗ **중요**: SceneKit은 더 이상 사용되지 않으므로, <a href="https://developer.apple.com/documentation/RealityKit">@@TOKEN_0@@</a> 대신 사용해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0008:0002">자세한 내용은 WWDC25 세션 288: <a href="https://developer.apple.comhttps://developer.apple.com/videos/play/wwdc2025/288/">@@TOKEN_0@@</a>를 참고할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001"><a href="arscnview.md">@@TOKEN_0@@</a> 클래스는 가상 3D 콘텐츠를 실세계 카메라 뷰와 결합한 AR 경험을 손쉽게 생성할 수 있는 방법을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">뷰에서 제공되는 <a href="arsession.md">@@TOKEN_0@@</a> 객체를 실행하면:</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0001">뷰는 장면 배경으로 장치 카메라의 실시간 비디오 피드를 자동으로 렌더링합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0002">뷰의 SceneKit 장면의 월드 좌표계는 세션 구성에서 설정한 AR 월드 좌표계에 직접 반응합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0003">뷰는 장치의 실제 이동에 맞춰 SceneKit 카메라를 자동으로 이동합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">ARKit는 SceneKit의 좌표 공간을 실세계에 자동으로 정렬하므로, 앱의 가상 콘텐츠를 배치한 뒤에도 사용자가 장치를 이동할 때 실세계 위에 있는 것처럼 보이는 상태를 유지합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0002"><a href="providing-3d-virtual-content-with-scenekit.md">@@TOKEN_0@@</a>를 참조하세요.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0001">씬에 추가한 객체의 위치를 추적하기 위해 반드시 <a href="aranchor.md">@@TOKEN_0@@</a> 클래스를 사용할 필요는 없지만, <a href="arscnviewdelegate.md">@@TOKEN_1@@</a> 메서드를 구현하면 ARKit가 자동으로 감지한 앵커에 SceneKit 콘텐츠를 추가할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0013:0001">ARKit는 Metal이 필요하므로 SceneKit의 Metal 기능만 사용해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0013:0002">예를 들어:</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0014:0001">이 클래스는 Metal Shading Language 코드가 포함된 <a href="https://developer.apple.com/documentation/SceneKit/SCNProgram">@@TOKEN_0@@</a> 인스턴스만 지원합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0014:0002"><a href="https://developer.apple.com/documentation/SceneKit/SCNView/Option/preferredRenderingAPI">@@TOKEN_0@@</a> 속성을 <a href="https://developer.apple.com/documentation/SceneKit/SCNRenderingAPI/openGLES2">@@TOKEN_1@@</a>로 설정하면, 프레임워크는 값을 <a href="https://developer.apple.com/documentation/SceneKit/SCNRenderingAPI/metal">@@TOKEN_2@@</a>로 되돌립니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0015:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:essentials:0016:0001">Essentials</span>

- <span class="ko-segment" data-segment-id="seg:list:essentials:0017:0001"><a href="providing-3d-virtual-content-with-scenekit.md">Providing 3D Virtual Content with SceneKit</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:essentials:0018:0001">SceneKit을 사용해 AR 경험에 사실적인 3차원 객체를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:essentials:0019:0001"><a href="arscnview/session.md">var session: ARSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:essentials:0020:0001">뷰 콘텐츠의 모션 추적과 카메라 이미지 처리를 관리하는 AR 세션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:essentials:0021:0001"><a href="arscnview/scene.md">var scene: SCNScene</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:essentials:0022:0001">뷰에 표시할 SceneKit 장면입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:responding-to-ar-updates:0023:0001">AR 업데이트에 반응하기</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-ar-updates:0024:0001"><a href="arscnview/delegate.md">var delegate: (any ARSCNViewDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-ar-updates:0025:0001">뷰의 AR 장면 정보를 SceneKit 콘텐츠와 동기화하도록 중재하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-ar-updates:0026:0001"><a href="arscnviewdelegate.md">protocol ARSCNViewDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-ar-updates:0027:0001">SceneKit 콘텐츠와 AR 세션 간 자동 동기화를 중재하기 위해 구현할 수 있는 메서드입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:finding-real-world-surfaces:0028:0001">실세계 표면 찾기</span>

- <span class="ko-segment" data-segment-id="seg:list:finding-real-world-surfaces:0029:0001">[func hitTest(CGPoint, types: ARHitTestResult.ResultType) -&gt; [ARHitTestResult]](arscnview/hittest(_:types:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:finding-real-world-surfaces:0030:0001">캡처된 카메라 이미지에서 SceneKit 뷰의 점에 해당하는 실세계 객체 또는 AR 앵커를 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:finding-real-world-surfaces:0031:0001"><a href="arscnview/raycastquery(from:allowing:alignment:">func raycastQuery(from: CGPoint, allowing: ARRaycastQuery.Target, alignment: ARRaycastQuery.TargetAlignment) -&gt; ARRaycastQuery?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:finding-real-world-surfaces:0032:0001">뷰의 한 점에서 시작되어 카메라 시야 중심과 정렬되는 raycast 쿼리를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:mapping-content-to-real-world-positions:0033:0001">콘텐츠를 실제 월드 위치에 매핑</span>

- <span class="ko-segment" data-segment-id="seg:list:mapping-content-to-real-world-positions:0034:0001"><a href="arscnview/anchor(for:">func anchor(for: SCNNode) -&gt; ARAnchor?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mapping-content-to-real-world-positions:0035:0001">지정된 SceneKit 노드에 연결된 AR anchor가 있으면 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:mapping-content-to-real-world-positions:0036:0001"><a href="arscnview/node(for:">func node(for: ARAnchor) -&gt; SCNNode?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mapping-content-to-real-world-positions:0037:0001">지정된 AR anchor에 연결된 SceneKit 노드가 있으면 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:mapping-content-to-real-world-positions:0038:0001"><a href="arscnview/unprojectpoint(_:ontoplane:">func unprojectPoint(CGPoint, ontoPlane: simd_float4x4) -&gt; simd_float3?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mapping-content-to-real-world-positions:0039:0001">ARKit에서 감지한 3D 월드 공간의 평면에 2D 뷰의 점을 투영한 값을 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:managing-lighting:0040:0001">조명 관리</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-lighting:0041:0001"><a href="arscnview/automaticallyupdateslighting.md">var automaticallyUpdatesLighting: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-lighting:0042:0001">뷰의 scene에서 SceneKit 조명을 생성하고 업데이트할지를 지정하는 부울 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:debugging-ar-display:0043:0001">AR 표시 디버깅</span>

- <span class="ko-segment" data-segment-id="seg:list:debugging-ar-display:0044:0001"><a href="arscndebugoptions.md">typealias ARSCNDebugOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:debugging-ar-display:0045:0001">SceneKit 뷰에서 AR 추적 디버깅을 돕기 위해 오버레이 콘텐츠를 그리기 위한 옵션입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:managing-rendering-effects:0046:0001">렌더링 효과 관리</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-rendering-effects:0047:0001"><a href="arscnview/rendersmotionblur.md">var rendersMotionBlur: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-rendering-effects:0048:0001">뷰가 모션 블러를 렌더링하는지 여부를 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-rendering-effects:0049:0001"><a href="arscnview/renderscameragrain.md">var rendersCameraGrain: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-rendering-effects:0050:0001">SceneKit이 앱의 가상 콘텐츠에 이미지 노이즈 특성을 적용할지 여부를 결정하는 플래그입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0051:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0052:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0053:0001"><a href="../SceneKit/SCNView.md">SCNView</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0054:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0001"><a href="arsessionproviding.md">ARSessionProviding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0002"><a href="../QuartzCore/CALayerDelegate.md">CALayerDelegate</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0003"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0004"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0005"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0006"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0007"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0008"><a href="../Foundation/NSCoding.md">NSCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0009"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0010"><a href="../AppKit/NSTouchBarProvider.md">NSTouchBarProvider</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0011"><a href="doc://com.apple.arkit/objc(pl">SceneKit.SCNSceneRenderer</a>SCNSceneRenderer)</span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0012"><a href="doc://com.apple.arkit/objc(pl">SceneKit.SCNTechniqueSupport</a>SCNTechniqueSupport)</span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0013"><a href="../UIKit/UIAccessibilityIdentification.md">UIAccessibilityIdentification</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0014"><a href="../UIKit/UIActivityItemsConfigurationProviding.md">UIActivityItemsConfigurationProviding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0015"><a href="../UIKit/UIAppearance.md">UIAppearance</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0016"><a href="../UIKit/UICoordinateSpace.md">UICoordinateSpace</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0017"><a href="../UIKit/UIDynamicItem.md">UIDynamicItem</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0018"><a href="../UIKit/UIFocusEnvironment.md">UIFocusEnvironment</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0019"><a href="../UIKit/UIFocusItem.md">UIFocusItem</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0020"><a href="../UIKit/UIFocusItemContainer.md">UIFocusItemContainer</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0021"><a href="doc://com.apple.arkit/objc(pl">UIKit.UIAppearanceContainer</a>UIAppearanceContainer)</span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0022"><a href="../UIKit/UILargeContentViewerItem.md">UILargeContentViewerItem</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0023"><a href="../UIKit/UIPasteConfigurationSupporting.md">UIPasteConfigurationSupporting</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0024"><a href="../UIKit/UIPopoverPresentationControllerSourceItem.md">UIPopoverPresentationControllerSourceItem</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0025"><a href="../UIKit/UIResponderStandardEditActions.md">UIResponderStandardEditActions</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0026"><a href="../UIKit/UITraitChangeObservable-67e94.md">UITraitChangeObservable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0027"><a href="../UIKit/UITraitEnvironment.md">UITraitEnvironment</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0028"><a href="../UIKit/UIUserActivityRestoring.md">UIUserActivityRestoring</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0056:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="../RealityKit/RealityView.md">struct RealityView</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">RealityKit 콘텐츠를 포함하는 뷰입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0059:0001"><a href="../RealityKit/ARView.md">class ARView</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">RealityKit으로 AR 경험을 표시할 수 있는 뷰입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0061:0001"><a href="arskview.md">class ARSKView</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0062:0001">SpriteKit의 가상 2D 콘텐츠를 증강 현실 경험의 3D 공간에 결합하는 뷰입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0063:0001"><a href="arcoachingoverlayview.md">class ARCoachingOverlayView</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0064:0001">특정 목표를 향해 사용자를 안내하는 표준 온보딩 안내를 표시하는 뷰입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0066:0001">*<a href="https://developer.apple.com/documentation/arkit/arscnview">View on Apple Developer</a>*</span>
