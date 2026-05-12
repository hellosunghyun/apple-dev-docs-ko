---
source_path: "documentation/ARKit/streaming-an-ar-experience.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/streaming-an-ar-experience"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:streaming-an-ar-experience:0000:0001">AR 경험 스트리밍</span>

<span class="ko-segment" data-segment-id="seg:paragraph:streaming-an-ar-experience:0001:0001">**프레임워크**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:streaming-an-ar-experience:0002:0001">네트워크를 통해 센서 데이터와 사용자 입력을 전송하여 AR 경험을 원격으로 제어합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:streaming-an-ar-experience:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:streaming-an-ar-experience:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:streaming-an-ar-experience:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:streaming-an-ar-experience:0004:0003">Mac Catalyst 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:streaming-an-ar-experience:0004:0004">Xcode 16.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">샘플 앱 AR Stream은 증강 카메라 피드를 피어 장치와 공유하고, 원격 AR 경험에 대한 상호작용을 통해 피어가 제어할 수 있게 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">예를 들어 사용자가 물리적 환경을 보여 주는 화면을 하드웨어 문제를 진단해 주는 컴퓨터 기술자와 공유할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0003">사용자가 테이블 위에 놓인 고장난 장치를 여러 각도에서 보는 동안, 원격 기술자는 사용자의 카메라 피드에 텍스트 주석을 추가해 기기 수리 단계에 필요한 작업을 설명함으로써 상호작용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">![실제 컴퓨터 타워 앞에서 사용자의 장치가 실제 환경의 AR 경험을 보는 모습을 보여 주는 삽화.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0002">화면은 기기의 카메라 피드를 통해 타워를 표시하며, 앱은 원격 기술자가 생성한 설명 텍스트로 이를 증강합니다.](https://docs-assets.developer.apple.com/published/e0bb1908e2ec930a83a07e11d1f863f6/ar-streaming-hero.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">원격 사용자가 사용자의 물리적 환경을 볼 수 있도록 AR Stream은 네트워크를 통해 장치 센서 정보를 공유합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002"><a href="https://developer.apple.com/documentation/VideoToolbox">@@TOKEN_0@@</a>로 카메라 프레임을 압축해 앱은 고프레임률로 원격 경험을 표시하고 피어가 사용자의 화면을 선명하게 볼 수 있도록 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">AR Stream은 또한 사용자의 실제 자세에 대한 수학적 세부 정보를 원격 사용자에게 전달해 피어의 터치 입력을 처리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">샘플 앱은 세션의 역 뷰 행렬과 역 투영 행렬을 원격 장치로 전송해 원격 사용자가 탭한 사용자의 환경 내 위치를 계산할 수 있게 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">원격 사용자가 화면을 탭했음을 표시하기 위해 AR Stream은 탭 위치에 유용한 가상 표시기를 배치합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:display-a-camera-feed-and-monitor-the-session:0010:0001">카메라 피드 표시 및 세션 모니터링</span>

<span class="ko-segment" data-segment-id="seg:paragraph:display-a-camera-feed-and-monitor-the-session:0011:0001">AR Stream는 <a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_0@@</a>를 표시하는 뷰 컨트롤러가 포함된 창을 구성해 장치의 카메라 피드를 표시합니다(샘플 프로젝트의 <code>Main.storyboard</code> 파일 참조).</span> <span class="ko-segment" data-segment-id="seg:paragraph:display-a-camera-feed-and-monitor-the-session:0011:0002">기본적으로 <a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_0@@</a>는 world-tracking 구성 <a href="arworldtrackingconfiguration.md">@@TOKEN_1@@</a>으로 세션을 실행합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:display-a-camera-feed-and-monitor-the-session:0011:0003">뷰의 세션 이벤트 알림을 수신하려면, 샘플 프로젝트의 뷰 컨트롤러(샘플 프로젝트의 <code>ViewController</code> 참고)는 자신을 세션 델리게이트로 지정합니다.</span>

```swift
arView.session.delegate = self
```

#### <span class="ko-segment" data-segment-id="seg:heading:capture-frames:0013:0001">프레임 캡처</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capture-frames:0014:0001">사용자의 물리적 환경을 원격 사용자에게 표시하기 위해 AR Stream는 <a href="https://developer.apple.com/documentation/ReplayKit/RPScreenRecorder">@@TOKEN_0@@</a>를 사용해 스크린 녹화 세션을 엽니다.</span>

```swift
RPScreenRecorder.shared().startCapture {
```

<span class="ko-segment" data-segment-id="seg:paragraph:capture-frames:0016:0001">스크린 녹화는 앱의 기본 창 내용을 캡처하며, 여기에는 RealityKit이 카메라 피드에 추가할 수 있는 증강 내용이 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:capture-frames:0016:0002"><a href="https://developer.apple.com/documentation/ReplayKit/RPScreenRecorder/startCapture(handler:completionHandler:">@@TOKEN_0@@</a>) 클로저에서 샘플 프로젝트는 캡처된 화면(<code>sampleBuffer</code>)을 네트워크 전송을 위해 <code>compressAndSend</code> 함수에 전달합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:capture-frames:0016:0003">샘플 프로젝트는 또한 세션의 현재 프레임을 전달해 화면 캡처가 카메라 이미지 크기에 맞춰지도록 합니다.</span>

```swift
if type == .video {
    guard let currentFrame = arView.session.currentFrame else { return }
    videoProcessor.compressAndSend(sampleBuffer, arFrame: currentFrame) {
```

> <span class="ko-segment" data-segment-id="seg:blockquote:capture-frames:0018:0001">**Note**: <a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_0@@</a>는 뷰의 내용을 캡처하는 <a href="https://developer.apple.com/documentation/RealityKit/ARView/snapshot(saveToHDR:completion:">@@TOKEN_1@@</a>-66jzu) 함수를 제공하지만, ReplayKit의 스크린 녹화가 실시간 캡처에 더 적합합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:compress-and-send-frames-to-the-peer:0019:0001">피어에 프레임 압축 및 전송</span>

<span class="ko-segment" data-segment-id="seg:paragraph:compress-and-send-frames-to-the-peer:0020:0001">샘플 프로젝트의 <code>VideoProcessor</code> 클래스는 <code>compressAndSend</code> 함수를 구현하며, 이 함수는 <a href="https://developer.apple.com/documentation/VideoToolbox/VTCompressionSession">@@TOKEN_2@@</a>을 사용해 캡처된 비디오 프레임을 압축합니다.</span>

```swift
VTCompressionSessionEncodeFrame(compressionSession,
    imageBuffer: imageBuffer,
    presentationTimeStamp: presentationTimeStamp,
    duration: .invalid,
    frameProperties: nil,
    infoFlagsOut: nil) {
```

<span class="ko-segment" data-segment-id="seg:paragraph:compress-and-send-frames-to-the-peer:0022:0001">앱의 실시간 스트리밍 사용 사례에서 적시에 압축되도록 비디오 프로세서는 압축 세션의 <a href="https://developer.apple.com/documentation/VideoToolbox/kVTCompressionPropertyKey_RealTime">@@TOKEN_0@@</a> 옵션을 활성화합니다.</span>

```swift
VTSessionSetProperty(compressionSession, key: kVTCompressionPropertyKey_RealTime,
    value: kCFBooleanTrue)
```

<span class="ko-segment" data-segment-id="seg:paragraph:compress-and-send-frames-to-the-peer:0024:0001"><a href="https://developer.apple.com/documentation/VideoToolbox/VTCompressionSession">@@TOKEN_0@@</a>이 프레임 인코딩을 완료하면 앱은 해당 <a href="arframe.md">@@TOKEN_1@@</a>에서 가져온 역투영 행렬과 역뷰 행렬을 사용해 <code>VideoFrameData</code> 인스턴스를 생성합니다.</span>

```swift
let videoFrameData = VideoFrameData(sampleBuffer: sampleBuffer, arFrame: arFrame)
```

<span class="ko-segment" data-segment-id="seg:paragraph:compress-and-send-frames-to-the-peer:0026:0001">프로젝트는 <code>VideoFrameData</code>를 JSON 데이터로 직렬화해 인코딩하고, 해당 데이터를 <code>sendHandler</code>로 전달합니다.</span>

```swift
do {
    let data = try JSONEncoder().encode(videoFrameData)
    // Invoke the caller's handler to send the data.
    sendHandler(data)
} catch {
    fatalError("Failed to encode videoFrameData as JSON with error: "
        + error.localizedDescription)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:compress-and-send-frames-to-the-peer:0028:0001">스크린 녹화 클로저는 데이터 전송을 위해 로컬 네트워크 상에서 <code>VideoFrameData</code>를 전송하는 코드가 포함된 <a href="https://developer.apple.com/documentation/MultipeerConnectivity">@@TOKEN_1@@</a> send handler를 정의합니다.</span>

```swift
multipeerSession.sendToAllPeers(data, reliably: true)
```

#### <span class="ko-segment" data-segment-id="seg:heading:receive-and-decompress-peer-frames:0030:0001">피어 프레임 수신 및 디컴프레스</span>

<span class="ko-segment" data-segment-id="seg:paragraph:receive-and-decompress-peer-frames:0031:0001">앱이 다른 장치에서 <code>VideoFrameData</code>를 받으면 JSON 데이터를 디코딩합니다.</span>

```swift
func receivedData(_ data: Data, from peer: MCPeerID) {
    // Try to decode the received data and handle it appropriately.
    if let videoFrameData = try? JSONDecoder().decode(VideoFrameData.self,
        from: data) {
```

<span class="ko-segment" data-segment-id="seg:paragraph:receive-and-decompress-peer-frames:0033:0001">전송된 비디오 프레임을 보관하려면 AR Stream가 샘플 버퍼를 재구성합니다.</span>

```swift
let sampleBuffer = videoFrameData.makeSampleBuffer()
```

<span class="ko-segment" data-segment-id="seg:paragraph:receive-and-decompress-peer-frames:0035:0001">시스템은 비압축 데이터만 표시할 수 있으므로 비디오 프로세서는 <code>decompress</code> 함수 내에서 <a href="https://developer.apple.com/documentation/VideoToolbox/VTDecompressionSession">@@TOKEN_1@@</a>을 사용해 비디오 프레임을 디컴프레스합니다.</span>

```swift
VTDecompressionSessionDecodeFrame(decompressionSession,
    sampleBuffer: sampleBuffer,
    flags: [],
    infoFlagsOut: nil) {
```

<span class="ko-segment" data-segment-id="seg:paragraph:receive-and-decompress-peer-frames:0037:0001">AR Stream는 샘플 프로젝트의 렌더러 객체(샘플 프로젝트의 <code>Renderer</code> 참조)를 사용해 비디오 프레임을 화면에 그립니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:receive-and-decompress-peer-frames:0037:0002">렌더러는 즉시 표시할 수 있도록 프레임 데이터를 큐에 넣습니다.</span>

```swift
// Update the PipView aspect ratio to match the camera-image dimensions.
let width = CGFloat(CVPixelBufferGetWidth(imageBuffer))
let height = CGFloat(CVPixelBufferGetHeight(imageBuffer))
overlayViewController?.setPipViewConstraints(width: width, height: height)

overlayViewController?.renderer.enqueueFrame(
    pixelBuffer: imageBuffer,
    presentationTimeStamp: presentationTimeStamp,
    inverseProjectionMatrix: videoFrameData.inverseProjectionMatrix,
    inverseViewMatrix: videoFrameData.inverseViewMatrix)
```

#### <span class="ko-segment" data-segment-id="seg:heading:display-the-remote-users-camera-feed:0039:0001">원격 사용자 카메라 피드 표시</span>

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-remote-users-camera-feed:0040:0001">AR Stream는 <a href="https://developer.apple.com/documentation/MetalKit/MTKView">@@TOKEN_0@@</a> 하위 클래스 <code>OverlayViewController</code>를 정의하며, 화면 왼쪽 아래에 *picture-in-picture* (PiP) 보기를 배치해 <a href="https://developer.apple.com/documentation/RealityKit/ARView">@@TOKEN_2@@</a> 위에 원격 사용자의 카메라 피드를 표시합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-remote-users-camera-feed:0041:0001">![앱 시작 시 사용자 AR 경험의 카메라 피드를 전체 크기로 표시한 앱의 스크린샷</span> <span class="ko-segment" data-segment-id="seg:paragraph:display-the-remote-users-camera-feed:0041:0002">화면 왼쪽 아래에는 원격 사용자의 경험 카메라 피드를 나타내는 더 작은 보기(또는 PiP 보기)를 오버레이합니다.](https://docs-assets.developer.apple.com/published/10a488f59f21fe469045f05871130c14/ar-streaming-pip-view.jpg)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:display-the-remote-users-camera-feed:0042:0001">샘플 프로젝트의 <code>AppDelegate</code>는 PiP 보기를 보조 창에서 구성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:display-the-remote-users-camera-feed:0042:0002">ReplayKit의 스크린 녹화는 기본 창만 캡처하므로 PiP 보기에는 원격 사용자의 카메라 피드만 표시됩니다.</span>

```swift
overlayWindow = UIWindow(windowScene: windowScene)

let storyBoard = UIStoryboard(name: "Main", bundle: nil)
let overlayViewController = storyBoard.instantiateViewController(
    identifier: "OverlayViewController")
overlayWindow.rootViewController = overlayViewController
overlayWindow.makeKeyAndVisible()

// Make sure the overlayWindow is always above the main window.
overlayWindow.windowLevel = window.windowLevel + 1
```

#### <span class="ko-segment" data-segment-id="seg:heading:send-gestures-to-the-peer:0044:0001">피어로 제스처 전송</span>

<span class="ko-segment" data-segment-id="seg:paragraph:send-gestures-to-the-peer:0045:0001">원격 사용자가 PiP 보기를 탭하면 프로젝트는 탭 위치를 기록해 반응합니다.</span>

```swift
@objc
func tapped(_ sender: UITapGestureRecognizer) {
    guard let view = sender.view else { return }
    let location = sender.location(in: view)
```

<span class="ko-segment" data-segment-id="seg:paragraph:send-gestures-to-the-peer:0047:0001">샘플 프로젝트는 사용자가 전송한 역행렬을 사용해 원격 사용자가 사용자의 AR 경험과 상호작용할 수 있게 합니다.</span>

```swift
guard let inverseProjectionMatrix = renderer.lastDrawnInverseProjectionMatrix,
    let inverseViewMatrix = renderer.lastDrawnInverseViewMatrix else {
    return
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:send-gestures-to-the-peer:0049:0001">프로젝트는 탭 위치와 역행렬을 사용해 사용자 <a href="arsession.md">@@TOKEN_0@@</a> 월드 좌표계에서의 위치와 방향을 설명하는 광선 캐스트로 변환합니다(샘플 프로젝트의 <code>makeRay</code> 함수 참조).</span>

```swift
let rayQuery = makeRay(from: location,
    viewportSize: view.frame.size,
    inverseProjectionMatrix: simd_float4x4(inverseProjectionMatrix),
    inverseViewMatrix: simd_float4x4(inverseViewMatrix))
```

<span class="ko-segment" data-segment-id="seg:paragraph:send-gestures-to-the-peer:0051:0001">그런 다음 샘플 프로젝트는 광선 캐스트를 JSON 데이터로 인코딩해 연결된 피어로 전송합니다.</span>

```swift
let data = try JSONEncoder().encode(rayQuery)
multipeerSession?.sendToAllPeers(data, reliably: true)
```

#### <span class="ko-segment" data-segment-id="seg:heading:handle-peer-gestures:0053:0001">Handle Peer Gestures</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-peer-gestures:0054:0001">In the project’s <code>ViewController</code>, the <code>receivedData</code> function receives a <code>Ray</code> object when the remote user taps the PiP view.</span>

```swift
} else if let rayQuery = try? JSONDecoder().decode(Ray.self, from: data) {
```

<span class="ko-segment" data-segment-id="seg:paragraph:handle-peer-gestures:0056:0001">To hand the remote user’s tap gesture to ARKit as if the user is tapping the screen, the sample project uses the <code>Ray</code> data to create an <a href="artrackedraycast.md">@@TOKEN_1@@</a>.</span>

```swift
trackedRaycast = arView.session.trackedRaycast(
    ARRaycastQuery(
        origin: rayQuery.origin,
        direction: rayQuery.direction,
        allowing: .estimatedPlane,
        alignment: .any)
    ) {
```

<span class="ko-segment" data-segment-id="seg:paragraph:handle-peer-gestures:0058:0001">When the tracked ray cast intersects with a surface in the user’s environment, the app records the resulting location.</span>

```swift
if let result = raycastResults.first {
    marker.transform.matrix = result.worldTransform
```

#### <span class="ko-segment" data-segment-id="seg:heading:display-virtual-content:0060:0001">Display Virtual Content</span>

<span class="ko-segment" data-segment-id="seg:paragraph:display-virtual-content:0061:0001">To enable the remote user to interact with the user’s AR experience, the app places a virtual ball at the location in the environment where the remote user taps.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:display-virtual-content:0062:0001">![A screenshot of the app that displays the camera feed of the user’s AR experience at full size.</span> <span class="ko-segment" data-segment-id="seg:paragraph:display-virtual-content:0062:0002">A purple virtual ball rests on a real desk in the remote user’s PiP view to indicate where the user tapped the remote user’s PiP view.](https://docs-assets.developer.apple.com/published/8268b999db44dca704b0c092567df256/ar-streaming-virtual-content.jpg)</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:display-virtual-content:0063:0001">❗ **Important**: AR Stream displays a virtual ball for simplicity.</span> <span class="ko-segment" data-segment-id="seg:blockquote:display-virtual-content:0063:0002">An app may require different virtual content, such as an arrow that points to a precise spot, or virtual text that explains the importance of a location.</span> <span class="ko-segment" data-segment-id="seg:blockquote:display-virtual-content:0063:0003">For an example app that displays text at a real-world location, see <a href="creating-screen-annotations-for-objects-in-an-ar-experience.md">@@TOKEN_0@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:display-virtual-content:0064:0001">The project creates this visual marker using a ball-shaped <a href="https://developer.apple.com/documentation/RealityKit/ModelEntity">@@TOKEN_0@@</a>.</span>

```swift
let marker: AnchorEntity = {
    let entity = AnchorEntity()
    entity.addChild(ModelEntity(mesh: .generateSphere(radius: 0.05)))
    entity.isEnabled = false
    return entity
}()
```

<span class="ko-segment" data-segment-id="seg:paragraph:display-virtual-content:0066:0001">At app launch, the marker is invisible by default as the project readies the marker for display by adding it to the scene.</span>

```swift
arView.scene.addAnchor(marker)
```

<span class="ko-segment" data-segment-id="seg:paragraph:display-virtual-content:0068:0001">When the app receives a <code>Ray</code> from the remote user and adjusts the marker’s position, the project displays the marker by enabling it.</span>

```swift
marker.isEnabled = true
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0070:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0071:0001"><a href="creating-a-collaborative-session.md">Creating a collaborative session</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0072:0001">Enable nearby devices to share an AR experience by using a peer-to-peer multiuser strategy.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0073:0001"><a href="creating-a-multiuser-ar-experience.md">Creating a multiuser AR experience</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0074:0001">Enable nearby devices to share an AR experience by using a host-guest multiuser strategy.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0075:0001"><a href="arparticipantanchor.md">class ARParticipantAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0076:0001">An anchor for another user in multiuser augmented reality experiences.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0077:0001"><a href="arsession/collaborationdata.md">ARSession.CollaborationData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0078:0001">An object that holds information that a user has collected about the physical environment.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0080:0001">*<a href="https://developer.apple.com/documentation/arkit/streaming-an-ar-experience">View on Apple Developer</a>*</span>
