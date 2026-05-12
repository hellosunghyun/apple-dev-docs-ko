---
source_path: "documentation/ARKit/creating-screen-annotations-for-objects-in-an-ar-experience.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/creating-screen-annotations-for-objects-in-an-ar-experience"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:creating-screen-annotations-for-objects-in-an-ar-experience:0000:0001">AR 경험의 객체를 위한 화면 주석 만들기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-screen-annotations-for-objects-in-an-ar-experience:0001:0001">**프레임워크**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-screen-annotations-for-objects-in-an-ar-experience:0002:0001">실제 객체와 가상 객체 위에 화면에 표시되는 가상 스티커 노트로 AR 경험을 주석 처리합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-screen-annotations-for-objects-in-an-ar-experience:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-screen-annotations-for-objects-in-an-ar-experience:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:creating-screen-annotations-for-objects-in-an-ar-experience:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:creating-screen-annotations-for-objects-in-an-ar-experience:0004:0003">Mac Catalyst 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:creating-screen-annotations-for-objects-in-an-ar-experience:0004:0004">Xcode 16.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">때로는 사용자가 AR 경험에서 실제 객체 또는 가상 객체에 주석을 추가하려고 할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">예를 들어, 박물관의 그림에 가상 이름표를 배치하고자 할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0003">주석을 화면에 고정하면 사용자는 AR 경험을 *screen space*에서 주석 처리할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0004">To demonstrate screen-space annotations, this sample app enables the capability to tap the screen to place one or more virtual sticky notes with text in the real world.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">이 샘플 앱은 화면 공간 주석을 시연하기 위해 사용자가 화면을 탭하면 실제 세계에 텍스트가 포함된 하나 이상의 가상 스티커 노트를 배치할 수 있는 기능을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0002">이 샘플 앱은 화면에 밀착된<a href="https://developer.apple.com/documentation/UIKit/UITextView">@@TOKEN_0@@</a>를 사용해 스티커 노트를 구현하므로 사용자가 일반 터치 입력으로 노트의 텍스트를 빠르게 입력할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0003">AR 경험에 주석을 추가할 때 UIKit을 사용하면 로컬라이제이션과 접근성의 이점도 얻을 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0008:0001">**참고**: 이 샘플은 RealityKit을 사용해 가상 콘텐츠를 실제 세계에 고정합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0008:0002">RealityKit에는 iOS 13이 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0008:0003">ARKit은 iOS Simulator에서 사용할 수 없습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">대신 월드 공간에 고정된 텍스트를 표시하려면 <a href="recognizing-and-labeling-arbitrary-objects.md">@@TOKEN_0@@</a>를 참조합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:resolve-the-users-tap-to-a-3d-location:0010:0001">사용자 탭을 3D 위치로 변환</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resolve-the-users-tap-to-a-3d-location:0011:0001">AR 경험에서 객체에 주석을 추가하려면 먼저 물리적 환경에서 해당 위치를 확인해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:resolve-the-users-tap-to-a-3d-location:0011:0002">``<code>swift
func arViewGestureSetup() {
    let tapGesture = UITapGestureRecognizer(target: self, action: #selector(tappedOnARView))
    arView.addGestureRecognizer(tapGesture)
    
    let swipeGesture = UISwipeGestureRecognizer(target: self, action: #selector(swipedDownOnARView))
    swipeGesture.direction = .down
    arView.addGestureRecognizer(swipeGesture)
}
</code>``</span>

```swift
func arViewGestureSetup() {
    let tapGesture = UITapGestureRecognizer(target: self, action: #selector(tappedOnARView))
    arView.addGestureRecognizer(tapGesture)
    
    let swipeGesture = UISwipeGestureRecognizer(target: self, action: #selector(swipedDownOnARView))
    swipeGesture.direction = .down
    arView.addGestureRecognizer(swipeGesture)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:resolve-the-users-tap-to-a-3d-location:0013:0001">입력 핸들러가 호출되면 <a href="https://developer.apple.com/documentation/UIKit/UIGestureRecognizer/location(in:">@@TOKEN_0@@</a>)를 호출해 탭한 화면 좌표를 읽습니다.</span>

```swift
let touchLocation = sender.location(in: arView)
```

<span class="ko-segment" data-segment-id="seg:paragraph:resolve-the-users-tap-to-a-3d-location:0015:0001">탭 위치에 대응하는 3D 월드 위치를 얻으려면 카메라의 원점에서 터치 위치로 레이를 투사해 해당 레이 상의 실제 세계 표면과의 교차 여부를 확인합니다.</span>

```swift
guard let raycastResult = arView.raycast(from: touchLocation, allowing: .estimatedPlane, alignment: .any).first else {
    messageLabel.displayMessage("No surface detected, try getting closer.", duration: 2.0)
    return
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:resolve-the-users-tap-to-a-3d-location:0017:0001">ARKit이 사용자가 탭한 위치에서 평면 표면을 찾으면 레이캐스트 결과에서 <a href="arraycastresult/worldtransform.md">@@TOKEN_0@@</a>의 3D 교차 지점을 제공합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:anchor-a-sticky-note-in-the-environment:0018:0001">환경에 스티커 노트 고정</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchor-a-sticky-note-in-the-environment:0019:0001">실제 세계 위치를 추적하려면 해당 위치에 앵커를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:anchor-a-sticky-note-in-the-environment:0019:0002">RealityKit은 앵커를 <a href="https://developer.apple.com/documentation/RealityKit/HasAnchoring">@@TOKEN_0@@</a>을 준수하는 <a href="https://developer.apple.com/documentation/RealityKit/Entity">@@TOKEN_1@@</a>로 구현합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:anchor-a-sticky-note-in-the-environment:0019:0003">따라서 RealityKit에서 스티커 노트를 설계할 때 이러한 프로토콜을 구현합니다.</span>

```swift
class StickyNoteEntity: Entity, HasAnchoring, HasScreenSpaceView {
    // ...
```

<span class="ko-segment" data-segment-id="seg:paragraph:anchor-a-sticky-note-in-the-environment:0021:0001">레이라트 결과의 <a href="arraycastresult/worldtransform.md">@@TOKEN_0@@</a>을 전달해 이니셜라이저를 호출해 엔티티를 생성합니다.</span>

```swift
let note = StickyNoteEntity(frame: frame, worldTransform: raycastResult.worldTransform)
```

<span class="ko-segment" data-segment-id="seg:paragraph:anchor-a-sticky-note-in-the-environment:0023:0001">스티커 노트 엔티티의 <code>init</code> 함수에서 <code>worldTransform</code>](arraycastresult/worldtransform.md) 인수를 변환 행렬로 설정해 엔티티를 탭 위치에 배치합니다.</span>

```swift
init(frame: CGRect, worldTransform: simd_float4x4) {
    super.init()
    self.transform.matrix = worldTransform
    // ...
```

<span class="ko-segment" data-segment-id="seg:paragraph:anchor-a-sticky-note-in-the-environment:0025:0001">엔티티를 장면 계층에 추가하여 RealityKit에 엔티티를 알립니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:anchor-a-sticky-note-in-the-environment:0025:0002">그러면 RealityKit이 ARKit에 해당 엔티티의 <a href="aranchor.md">@@TOKEN_0@@</a>를 등록합니다.</span>

```swift
// Add the sticky note to the scene's entity hierarchy.
arView.scene.addAnchor(note)
```

#### <span class="ko-segment" data-segment-id="seg:heading:display-the-sticky-notes-annotation:0027:0001">스티커 노트 주석 표시</span>

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0028:0001">이 샘플 앱에서는 스티커 노트 엔티티에 기하가 없어 형태가 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0028:0002">이 앵커는 3D 위치만 제공하므로 스티커 노트의 화면 공간 주석에만 표시가 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0028:0003">이를 표시하려면 스티커 노트의 주석을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0028:0004">RealityKit의 엔티티-컴포넌트 모델에 따라 주석을 포함하는 컴포넌트를 설계하는데, 이 경우 컴포넌트는 뷰입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0028:0005"><code>ScreenSpaceComponent.swift</code>를 참조합니다.</span>

```swift
struct ScreenSpaceComponent: Component {
    var view: StickyNoteView?
    //...
```

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0030:0001">텍스트를 렌더링해 주는 사전 패키지 UI 요소로서 <a href="https://developer.apple.com/documentation/UIKit/UITextView">@@TOKEN_0@@</a>가 화면 공간 주석에 유용합니다.</span>

```swift
class StickyNoteView: UIView {
    var textView: UITextView!
    // ...
```

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0032:0001">화면 공간 컴포넌트를 자체 프로토콜로 노출합니다.</span>

```swift
protocol HasScreenSpaceView: Entity {
    var screenSpaceComponent: ScreenSpaceComponent { get set }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0034:0001">엔티티에서 해당 프로토콜을 구현합니다. <code>StickyNoteEntity.swift</code>를 확인합니다.</span>

```swift
class StickyNoteEntity: Entity, HasAnchoring, HasScreenSpaceView {
    // ...
```

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0036:0001">엔티티의 주석을 표시하려면 스티커 노트 뷰를 뷰 계층에 추가합니다.</span>

```swift
// Add the sticky note's view to the view hierarchy.
guard let stickyView = note.view else { return }
arView.insertSubview(stickyView, belowSubview: trashZone)
```

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0038:0001">주석을 화면의 정확한 위치에 배치하려면 <a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_0@@</a>에 엔티티의 월드 위치를 2D 화면 좌표로 변환하라고 요청합니다.</span>

```swift
guard let projectedPoint = arView.project(note.position) else { return }
```

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0040:0001">시각적 정확도를 높이려면 앵커의 투영된 월드 위치를 기준으로 노트의 뷰를 가운데 정렬합니다.</span>

```swift
setPositionCenter(projectedPoint)
```

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-sticky-notes-annotation:0042:0001">이를 위해 중간점을 계산해 뷰의 원점을 설정합니다.</span>

```swift
view.frame.origin = CGPoint(x: centerPoint.x, y: centerPoint.y)
```

#### <span class="ko-segment" data-segment-id="seg:heading:update-the-annotations-position:0044:0001">주석 위치 업데이트</span>

<span class="ko-segment" data-segment-id="seg:paragraph:update-the-annotations-position:0045:0001">사용자가 AR 경험에서 기기를 이동하면 주석의 화면 위치가 앵커의 월드 위치와 빠르게 맞지 않게 됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:update-the-annotations-position:0045:0002">주석의 화면 위치를 정확히 유지하려면 <a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_0@@</a>의 <code>project</code> 함수를 매 프레임 호출하고 결과로 주석의 위치를 갱신합니다.</span>

```swift
// Updates the screen position of the note based on its visibility
note.projection = Projection(projectedPoint: projectedPoint, isVisible: isVisible)
note.updateScreenPosition()
```

#### <span class="ko-segment" data-segment-id="seg:heading:handle-user-interaction:0047:0001">사용자 상호작용 처리</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0048:0001">스크린 주석에 <a href="https://developer.apple.com/documentation/UIKit/UIView">@@TOKEN_0@@</a> 타입을 사용하면 사용자 상호작용을 간소화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0048:0002">샘플은 <a href="https://developer.apple.com/documentation/UIKit/UITextView">@@TOKEN_0@@</a>를 사용해 스티커 노트를 구현하며, 사용자가 텍스트를 더 쉽게 편집할 수 있도록 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0048:0003">샘플은 스티커 노트를 관리하는 최소한의 제스처 인식기 코드를 구현합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0049:0001">다음 코드는 화면을 탭해 노트를 생성하는 기능을 제공합니다.</span>

```swift
@objc
func tappedOnARView(_ sender: UITapGestureRecognizer) {
    
    // Ignore the tap if the user is editing a sticky note.
    for note in stickyNotes where note.isEditing { return }
    
    // Create a new sticky note at the tap location.
    insertNewSticky(sender)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0051:0001">편집을 제어하기 위해 자체 탭 제스처 인식기를 구현하면 <a href="https://developer.apple.com/documentation/UIKit/UITextView">@@TOKEN_0@@</a>는 사용자가 기존 노트를 탭해 텍스트를 편집할 수 있게 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0051:0002">사용자가 노트를 편집할 때 알림을 받으려면 <a href="https://developer.apple.com/documentation/UIKit/UITextView">@@TOKEN_0@@</a>의 <code>textViewDidBeginEditing(_ textView:)</code> 델리게이트 콜백을 재정의합니다.</span>

```swift
extension ViewController: UITextViewDelegate {
    
    // - Tag: TextViewDidBeginEditing
    func textViewDidBeginEditing(_ textView: UITextView) {

        // Get the main view for this sticky note.
        guard let stickyView = textView.firstSuperViewOfType(StickyNoteView.self) else { return }
        // ...

```

<span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0053:0001">다음 코드는 화면을 팬 제스처로 이동해 노트를 이동할 수 있는 기능을 활성화합니다.</span>

```swift
@objc
func panOnStickyView(_ sender: UIPanGestureRecognizer) {
    
    guard let stickyView = sender.view as? StickyNoteView else { return }
    
    let panLocation = sender.location(in: arView)
    
    // Ignore the pan if any StickyViews are being edited.
    for note in stickyNotes where note.isEditing { return }
    
    panStickyNote(sender, stickyView, panLocation)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0055:0001">사용자가 스티커 노트를 재배치할 때, 화면 터치 위치를 <a href="https://developer.apple.com/documentation/RealityKit/ARView/raycast(from:allowing:alignment:">@@TOKEN_0@@</a>)를 사용해 3D 월드 위치로 변환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0055:0002">이후 사용자는 임의의 화면 위치로 주석을 단순히 이동하는 대신 실제 세계에서 스티커 노트의 앵커를 재배치할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0055:0003">팬 제스처의 마지막 화면 위치에서 레이캐스트를 실행했을 때 3D 월드 위치와의 교차가 감지되지 않으면 해당 위치로 스티커 노트를 이동하지 않습니다.</span>

```swift
fileprivate func attemptRepositioning(_ stickyView: StickyNoteView) {
    // Conducts a ray-cast for feature points using the panned position of the StickyNoteView
    let point = CGPoint(x: stickyView.frame.midX, y: stickyView.frame.midY)
    if let result = arView.raycast(from: point, allowing: .estimatedPlane, alignment: .any).first {
        stickyView.stickyNote.transform.matrix = result.worldTransform
    } else {
        messageLabel.displayMessage("No surface detected, unable to reposition note.", duration: 2.0)
        stickyView.stickyNote.shouldAnimate = true
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:handle-user-interaction:0057:0001">다음 pan 제스처 처리 부분은 사용자가 화면 상단의 &quot;delete&quot; 텍스트로 끌어올 때 스티커 노트를 삭제할 수 있는 기능을 지원합니다.</span>

```swift
if stickyView.isInTrashZone {
    deleteStickyNote(stickyView.stickyNote)
    // ...
```

#### <span class="ko-segment" data-segment-id="seg:heading:enhance-the-experience-with-animation:0059:0001">애니메이션으로 경험 향상</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0060:0001">화면 공간 주석을 최소화하면 AR 경험에서 사용자의 몰입도를 최대화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0060:0002">샘플 앱은 사용자가 텍스트를 편집하지 않을 때 스티커 노트를 작게 표시해 산만함을 줄이고 실제 환경에 집중할 수 있게 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0060:0003">그러나 같은 이유로 사용자가 텍스트를 편집할 때는 스티커 노트를 확대해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0060:0004">편집 상태와 비편집 상태 간 전환을 매끄럽게 만들려면 스티커 노트 크기를 갑작스럽게 바꾸지 말고 애니메이션으로 조정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0060:0005"><code>animateStickyViewToEditingFrame</code> 함수에서 해당 동작을 확인할 수 있습니다.</span>

```swift
func animateStickyViewToEditingFrame(_ stickyView: StickyNoteView, keyboardHeight: Double) {
    let safeFrame = view.safeAreaLayoutGuide.layoutFrame
    let height = safeFrame.height - keyboardHeight
    let inset = height * 0.05
    let editingFrame = CGRect(origin: safeFrame.origin, size: CGSize(width: safeFrame.width, height: height)).insetBy(dx: inset, dy: inset)
    UIViewPropertyAnimator(duration: 0.2, curve: .easeIn) {
        stickyView.frame = editingFrame
        //...
```

<span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0062:0001">배경을 어둡게 하고 사용자가 편집 중인 스티커 노트를 강조 표시하여 편집 경험을 더욱 집중되게 만듭니다.</span>

```swift
stickyView.blurView.effect = UIBlurEffect(style: .light)
```

<span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0064:0001">사용자가 스티커 노트의 실제 위치를 잃지 않도록 노트를 한 위치에서 다음 위치로 부드럽게 애니메이션 처리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0064:0002">예를 들어 주석 재배치가 실패하면 스티커 노트를 원래 화면 위치로 되돌려 애니메이션합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0064:0003">이렇게 하면 사용자가 다시 이동을 시도할 때 주석을 추적하기 쉬워집니다.</span>

```swift
if shouldAnimate {
    animateTo(projectedPoint)
    // ...
```

<span class="ko-segment" data-segment-id="seg:paragraph:enhance-the-experience-with-animation:0066:0001">노트의 움직임을 애니메이트하려면 <a href="https://developer.apple.com/documentation/UIKit/UIViewPropertyAnimator">@@TOKEN_0@@</a>를 사용해 위치를 지속적으로 설정합니다.</span>

```swift
func animateTo(_ point: CGPoint) {

    let animator = UIViewPropertyAnimator(duration: 0.3, curve: .linear) {
        self.setPositionCenter(point)
    }
    // ...
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0068:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0069:0001"><a href="recognizing-and-labeling-arbitrary-objects.md">Recognizing and Labeling Arbitrary Objects</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0070:0001">커스텀 광학 인식 알고리즘을 사용해 카메라 피드에서 인식한 객체를 추적하는 앵커를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0072:0001">*<a href="https://developer.apple.com/documentation/arkit/creating-screen-annotations-for-objects-in-an-ar-experience">View on Apple Developer</a>*</span>
