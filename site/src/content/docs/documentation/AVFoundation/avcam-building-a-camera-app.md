---
source_path: "documentation/AVFoundation/avcam-building-a-camera-app.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcam-building-a-camera-app"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcam-building-a-camera-app:0000:0001">AVCam: 카메라 앱 만들기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcam-building-a-camera-app:0001:0001">**프레임워크**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcam-building-a-camera-app:0002:0001">전면 및 후면 iPhone, iPad 카메라를 사용해 사진을 캡처하고 동영상을 녹화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcam-building-a-camera-app:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcam-building-a-camera-app:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcam-building-a-camera-app:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcam-building-a-camera-app:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcam-building-a-camera-app:0004:0004">Xcode 26.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">이 AVCam 샘플은 iOS용 기본 카메라 앱을 빌드하는 방법을 보여줍니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">이 샘플은 AVFoundation을 사용해 장치 카메라와 마이크에 접근하고 캡처 세션을 구성하며, 사진과 동영상을 캡처하는 방법 등 다양한 방법을 보여줍니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0003">또한 <a href="https://developer.apple.com/documentation/PhotoKit">@@TOKEN_0@@</a> 프레임워크를 사용해 캡처한 미디어를 Photos 라이브러리에 저장하는 방법도 보여줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">이 샘플은 SwiftUI와 Swift 동시성 기능을 사용해 반응형 카메라 앱을 빌드합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0002">다음 다이어그램은 앱의 설계를 설명합니다:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">![앱 객체 간의 관계를 설명하는 다이어그램입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">앱이 시작되면 <code>CameraModel</code> 인스턴스를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">카메라 모델은 필수 기능 수행에 사용하는 <code>CaptureService</code>와 <code>MediaLibrary</code> 타입의 인스턴스를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0004">마지막으로 앱은 기본 사용자 인터페이스를 제공하는 <code>CameraView</code> 인스턴스를 생성하고 <code>CameraModel</code> 객체에 대한 참조를 전달합니다.](https://docs-assets.developer.apple.com/published/099e27ca35a3de0fc5aaadb24152517d/app-assembly-overview.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">이 앱에서 핵심적으로 정의된 타입은 AVFoundation 캡처 API와의 상호작용을 관리하는 actor인 <code>CaptureService</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">이 객체는 캡처 파이프라인을 구성하고 수명을 관리하며, 사진과 동영상을 캡처하는 비동기 인터페이스를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">해당 동작은 앱의 <code>PhotoCapture</code> 및 <code>MovieCapture</code> 객체에 각각 위임됩니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0010:0001">**참고**: 캡처 세션을 구성하고 시작하는 작업은 완료까지 시간이 걸릴 수 있는 블로킹 연산입니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0010:0002">UI 반응성을 유지하기 위해 앱은 <code>CaptureService</code>를 actor 타입으로 정의해 AVFoundation 캡처 API 호출이 메인 스레드에서 실행되지 않도록 합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:configure-the-sample-code-project:0011:0001">샘플 코드 프로젝트 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-the-sample-code-project:0012:0001">시뮬레이터는 장치 카메라에 접근할 수 없으므로 앱 실행에 적합하지 않으므로, 실제 기기에서 실행해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-the-sample-code-project:0012:0002">이 샘플을 실행하려면 다음이 필요합니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:configure-the-sample-code-project:0013:0001">iOS 26 이상이 탑재된 iOS 기기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-the-sample-code-project:0014:0001">AVCam은 <a href="https://developer.apple.com/documentation/LockedCameraCapture">@@TOKEN_0@@</a> 프레임워크를 채택해 앱이 잠금 화면, Control Center, 액션 버튼, Camera Control에서 실행될 수 있는 자격을 갖추게 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-the-sample-code-project:0014:0002">이 프레임워크를 지원하기 위해 샘플은 기본 앱 대상에 캡처 확장 대상과 Control Center 확장 대상을 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-the-sample-code-project:0014:0003">샘플을 빌드하고 실행하려면 각 대상에 서명 자격 증명을 설정합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:configure-a-capture-session:0015:0001">캡처 세션 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0016:0001">모든 캡처 앱의 중심 객체는 <a href="AVCaptureSession.md">@@TOKEN_0@@</a> 인스턴스입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0016:0002">캡처 세션은 앱이 카메라와 마이크 장치의 입력을 연결하고, 이를 사진 및 동영상을 캡처하는 출력에 연결하는 중앙 허브입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0016:0003">세션을 구성한 후 앱은 이를 통해 캡처 파이프라인으로 데이터 흐름을 제어합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0017:0001">![캡처 세션 구성을 설명하는 다이어그램입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0017:0002">이 다이어그램은 카메라 및 마이크 장치의 입력을 사진 또는 동영상을 캡처하거나 비디오 미리보기를 표시할 수 있는 호환 출력에 연결하는 방법을 보여줍니다.](https://docs-assets.developer.apple.com/published/5bffa1d94c052514c5b1f45adc09649b/avcapturesession-overview.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0018:0001">캡처 서비스는 <code>setUpSession()</code> 메서드에서 세션 구성을 수행합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0018:0002">호스트 장치의 기본 카메라와 마이크를 검색한 다음 이를 캡처 세션의 입력으로 추가합니다.</span>

```swift
// Retrieve the default camera and microphone.
let defaultCamera = try deviceLookup.defaultCamera
let defaultMic = try deviceLookup.defaultMic

// Add inputs for the default camera and microphone devices.
activeVideoInput = try addInput(for: defaultCamera)
try addInput(for: defaultMic)
```

<span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0020:0001">입력을 추가하기 위해 이 메서드는 지정한 카메라 또는 마이크 장치에 대한 새 <a href="avcapturedeviceinput.md">@@TOKEN_0@@</a> 인스턴스를 생성하고, 가능한 경우 캡처 세션에 추가하는 헬퍼 메서드를 사용합니다.</span>

```swift
// Adds an input to the capture session to connect the specified capture device.
@discardableResult
private func addInput(for device: AVCaptureDevice) throws -> AVCaptureDeviceInput {
    let input = try AVCaptureDeviceInput(device: device)
    if captureSession.canAddInput(input) {
        captureSession.addInput(input)
    } else {
        throw CameraError.addInputFailed
    }
    return input
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0022:0001">장치 입력을 추가한 후, 해당 메서드는 앱의 기본 사진 캡처 모드에 맞게 캡처 세션을 구성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0022:0002">캡처 세션의 <a href="avcapturesession/preset/photo.md">@@TOKEN_0@@</a> 프리셋을 설정하면 고해상도 사진 화질 출력용 파이프라인이 최적화됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-a-capture-session:0022:0003">마지막으로 앱에서 사진을 촬영할 수 있도록 세션에 <a href="avcapturephotooutput.md">@@TOKEN_0@@</a> 인스턴스를 추가합니다.</span>

```swift
// Configure the session for photo capture by default.
captureSession.sessionPreset = .photo

// Add the photo capture output as the default output type.
if captureSession.canAddOutput(photoCapture.output) {
    captureSession.addOutput(photoCapture.output)
} else {
    throw CameraError.addOutputFailed
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:set-up-a-capture-preview:0024:0001">캡처 미리보기 설정</span>

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-capture-preview:0025:0001">카메라가 캡처하는 콘텐츠를 미리보려면 AVFoundation은 <a href="avcapturevideopreviewlayer.md">@@TOKEN_0@@</a>라는 Core Animation 레이어 하위 클래스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-capture-preview:0025:0002">SwiftUI는 레이어를 직접 사용할 수 없으므로 앱에서는 이 레이어를 <code>PreviewView</code>라는 <a href="https://developer.apple.com/documentation/UIKit/UIView">@@TOKEN_1@@</a> 하위 클래스에 호스팅합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-capture-preview:0025:0003"><a href="https://developer.apple.com/documentation/UIKit/UIView/layerClass">@@TOKEN_0@@</a> 속성을 오버라이드해 미리보기 레이어를 뷰의 백킹 레이어로 설정합니다.</span>

```swift
class PreviewView: UIView, PreviewTarget {
    
    // Use `AVCaptureVideoPreviewLayer` as the view's backing layer.
    override class var layerClass: AnyClass {
        AVCaptureVideoPreviewLayer.self
    }
    
    var previewLayer: AVCaptureVideoPreviewLayer {
        layer as! AVCaptureVideoPreviewLayer
    }
    
    func setSession(_ session: AVCaptureSession) {
        // Connects the session with the preview layer, which allows the layer
        // to provide a live view of the captured content.
        previewLayer.session = session
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-capture-preview:0027:0001">이 뷰를 SwiftUI에서 사용할 수 있도록 앱은 <code>CameraPreview</code>라는 <a href="https://developer.apple.com/documentation/SwiftUI/UIViewRepresentable">@@TOKEN_1@@</a> 타입으로 래핑합니다.</span>

```swift
struct CameraPreview: UIViewRepresentable {
    
    private let source: PreviewSource
    
    init(source: PreviewSource) {
        self.source = source
    }
    
    func makeUIView(context: Context) -> PreviewView {
        let preview = PreviewView()
        // Connect the preview layer to the capture session.
        source.connect(to: preview)
        return preview
    }
    
    func updateUIView(_ previewView: PreviewView, context: Context) {
        // No implementation needed.
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-capture-preview:0029:0001">미리보기를 캡처 세션에 연결하면서 캡처 서비스의 보호 상태를 직접 노출하지 않기 위해, 샘플은 앱 전용 <code>PreviewSource</code>와 <code>PreviewTarget</code> 프로토콜을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-capture-preview:0029:0002">앱은 캡처 세션에 대한 참조를 제공하는 <code>PreviewSource</code>를 <code>CameraPreview</code>에 전달합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-capture-preview:0029:0003"><code>PreviewSource</code>의 <code>connect(to:)</code> 메서드를 호출하면 <code>PreviewView</code> 인스턴스에 캡처 세션이 설정됩니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:request-authorization:0030:0001">권한 부여 요청</span>

<span class="ko-segment" data-segment-id="seg:paragraph:request-authorization:0031:0001">초기 캡처 구성이 완료되었지만 앱이 캡처 세션을 성공적으로 시작하려면 장치 입력을 사용할 권한이 있는지 판정해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:request-authorization:0031:0002">시스템은 카메라와 마이크의 입력을 캡처하려면 사용자가 앱에 대해 명시적으로 권한을 부여해야 한다고 요구합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:request-authorization:0031:0003">앱의 상태를 판정하기 위해 캡처 서비스는 다음과 같이 비동기 <code>isAuthorized</code> 속성을 정의합니다.</span>

```swift
var isAuthorized: Bool {
    get async {
        let status = AVCaptureDevice.authorizationStatus(for: .video)
        // Determine whether a person previously authorized camera access.
        var isAuthorized = status == .authorized
        // If the system hasn't determined their authorization status,
        // explicitly prompt them for approval.
        if status == .notDetermined {
            isAuthorized = await AVCaptureDevice.requestAccess(for: .video)
        }
        return isAuthorized
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:request-authorization:0033:0001">이 속성의 구현은 <a href="avcapturedevice.md">@@TOKEN_0@@</a> 메서드를 사용해 현재 상태를 확인하고, 앱이 아직 판정되지 않은 경우 사용자에게 권한 부여를 요청합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:request-authorization:0033:0002">앱에 권한이 있으면 데이터 흐름을 시작하기 위해 캡처 세션을 시작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:request-authorization:0033:0003">권한이 없으면 사용자 인터페이스에 오류 메시지를 표시합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:request-authorization:0034:0001">카메라와 마이크 접근에 필요한 구성에 대한 자세한 내용은 <a href="requesting-authorization-to-capture-and-save-media.md">@@TOKEN_0@@</a>를 참조합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:change-the-capture-mode:0035:0001">캡처 모드 변경</span>

<span class="ko-segment" data-segment-id="seg:paragraph:change-the-capture-mode:0036:0001">앱은 사진 캡처 모드로 시작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:change-the-capture-mode:0036:0002">모드를 변경하려면 캡처 세션을 다음과 같이 다시 구성해야 합니다.</span>

```swift
func setCaptureMode(_ captureMode: CaptureMode) throws {
    
    self.captureMode = captureMode
    
    // Change the configuration atomically.
    captureSession.beginConfiguration()
    defer { captureSession.commitConfiguration() }
    
    // Configure the capture session for the selected capture mode.
    switch captureMode {
    case .photo:
        // The app needs to remove the movie capture output to perform Live Photo capture.
        captureSession.sessionPreset = .photo
        captureSession.removeOutput(movieCapture.output)
    case .video:
        captureSession.sessionPreset = .high
        try addOutput(movieCapture.output)
    }

    // Update the advertised capabilities after reconfiguration.
    updateCaptureCapabilities()
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:change-the-capture-mode:0038:0001">사진 캡처 모드에서는 캡처 세션에 <a href="avcapturesession/preset/photo.md">@@TOKEN_0@@</a> 프리셋을 설정해 캡처 파이프라인을 고해상도 사진 출력에 맞게 최적화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:change-the-capture-mode:0038:0002">또한 동영상 캡처 출력도 제거해 사진 출력이 Live Photo 캡처를 수행하지 않도록 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:change-the-capture-mode:0038:0003">비디오 캡처 모드에서는 세션 프리셋을 <a href="avcapturesession/preset/high.md">@@TOKEN_0@@</a>로 설정하고 동영상 파일 캡처 출력을 세션에 추가합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:select-a-new-camera:0039:0001">새 카메라 선택</span>

<span class="ko-segment" data-segment-id="seg:paragraph:select-a-new-camera:0040:0001">앱은 사용자가 전면 카메라와 후면 카메라를 전환하고, iPadOS에서는 연결된 외부 카메라도 전환할 수 있도록 버튼을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-a-new-camera:0040:0002">활성 카메라를 변경하려면 앱이 다음과 같이 세션을 재구성합니다.</span>

```swift
// Changes the device the service uses for video capture.
private func changeCaptureDevice(to device: AVCaptureDevice) {
    // The service must have a valid video input prior to calling this method.
    guard let currentInput = activeVideoInput else { fatalError() }
    
    // Bracket the following configuration in a begin/commit configuration pair.
    captureSession.beginConfiguration()
    defer { captureSession.commitConfiguration() }
    
    // Remove the existing video input before attempting to connect a new one.
    captureSession.removeInput(currentInput)
    do {
        // Attempt to connect a new input and device to the capture session.
        activeVideoInput = try addInput(for: device)
        // Configure a new rotation coordinator for the new device.
        createRotationCoordinator(for: device)
        // Register for device observations.
        observeSubjectAreaChanges(of: device)
        // Update the service's advertised capabilities.
        updateCaptureCapabilities()
    } catch {
        // Reconnect the existing camera on failure.
        captureSession.addInput(currentInput)
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:select-a-new-camera:0042:0001"><a href="avcapturesession.md">@@TOKEN_0@@</a>은 한 번에 단일 카메라 입력만 허용하므로, 이 메서드는 기존 카메라의 입력을 제거하는 것으로 시작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-a-new-camera:0042:0002">그다음 새 장치에 대한 입력 추가를 시도한 뒤, 성공하면 장치 변경을 반영하도록 일부 내부 구성을 수행합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-a-new-camera:0042:0003">캡처 세션이 새 장치를 추가할 수 없으면 제거된 입력을 다시 연결합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:select-a-new-camera:0043:0001">**Note**: 앱에서 여러 카메라를 동시에 캡처해야 하는 경우에는 <a href="avcapturemulticamsession.md">@@TOKEN_0@@</a> 대신 사용합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:capture-a-photo:0044:0001">사진 촬영</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capture-a-photo:0045:0001">캡처 서비스는 앱의 사진 촬영 기능 처리를 <code>PhotoCapture</code> 객체에 위임하며, 이 객체는 <a href="avcapturephotooutput.md">@@TOKEN_1@@</a>와의 상호작용과 수명 주기를 관리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:capture-a-photo:0045:0002">앱은 이 객체의 <a href="avcapturephotooutput/capturephoto(with:delegate:">@@TOKEN_0@@</a>.md) 메서드를 호출하여 사진을 캡처합니다. 이때 캡처 설정을 설명하는 객체와 캡처 진행 중 시스템이 호출할 델리게이트를 전달합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:capture-a-photo:0045:0003">이 델리게이트 기반 API를 <code>async</code> 컨텍스트에서 사용하려면, 앱은 다음과 같이 checked throwing continuation으로 이 호출을 래핑합니다.</span>

```swift
/// The app calls this method when the user taps the photo capture button.
func capturePhoto(with features: EnabledPhotoFeatures) async throws -> Photo {
    // Wrap the delegate-based capture API in a continuation to use it in an async context.
    try await withCheckedThrowingContinuation { continuation in
        
        // Create a settings object to configure the photo capture.
        let photoSettings = createPhotoSettings(with: features)
        
        let delegate = PhotoCaptureDelegate(continuation: continuation)
        monitorProgress(of: delegate)
        
        // Capture a new photo with the specified settings.
        photoOutput.capturePhoto(with: photoSettings, delegate: delegate)
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:capture-a-photo:0047:0001">시스템이 사진 캡처를 마치면 델리게이트의 <a href="avcapturephotocapturedelegate/photooutput(_:didfinishcapturefor:error:">@@TOKEN_0@@</a>.md) 메서드를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:capture-a-photo:0047:0002">이 메서드의 델리게이트 객체 구현은 continuation을 사용해 사진을 반환하거나 오류를 발생시켜 실행을 재개합니다.</span>

```swift
func photoOutput(_ output: AVCapturePhotoOutput, didFinishCaptureFor resolvedSettings: AVCaptureResolvedPhotoSettings, error: Error?) {

    // If an error occurs, resume the continuation by throwing an error, and return.
    if let error {
        continuation.resume(throwing: error)
        return
    }
    
    /// Create a photo object to save to the `MediaLibrary`.
    let photo = Photo(data: photoData, isProxy: isProxyPhoto, livePhotoMovieURL: livePhotoMovieURL)
    // Resume the continuation by returning the captured photo.
    continuation.resume(returning: photo)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:capture-a-photo:0049:0001">AVFoundation으로 사진을 캡처하는 자세한 내용은 <a href="capturing-still-and-live-photos.md">@@TOKEN_0@@</a>를 참조하십시오.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:record-a-movie:0050:0001">동영상 녹화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:record-a-movie:0051:0001">캡처 서비스는 앱의 비디오 캡처 기능 처리를 <code>MovieCapture</code> 객체에 위임하며, 이 객체는 <a href="avcapturemoviefileoutput.md">@@TOKEN_1@@</a>와의 상호작용과 수명 주기를 관리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:record-a-movie:0051:0002">동영상 녹화를 시작하려면 앱은 영화 파일 출력의 <a href="avcapturefileoutput/startrecording(to:recordingdelegate:">@@TOKEN_0@@</a>.md) 메서드를 호출합니다. 이 메서드는 영상을 저장할 URL과, 녹화가 완료되면 시스템이 호출할 델리게이트를 받습니다.</span>

```swift
/// Starts movie recording.
func startRecording() {
    // Return early if already recording.
    guard !movieOutput.isRecording else { return }

    // Start a timer to update the recording time.
    startMonitoringDuration()
    
    delegate = MovieCaptureDelegate()
    movieOutput.startRecording(to: URL.movieFileURL, recordingDelegate: delegate!)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:record-a-movie:0053:0001">동영상 녹화를 마치려면 앱은 영화 파일 출력의 <a href="avcapturefileoutput/stoprecording(">@@TOKEN_0@@</a>.md) 메서드를 호출하며, 이때 시스템이 델리게이트를 호출해 캡처된 출력을 처리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:record-a-movie:0053:0002">이 델리게이트 기반 콜백을 사용하려면 앱은 다음과 같이 해당 상호작용을 checked throwing continuation으로 감쌉니다.</span>

```swift
/// Stops movie recording.
/// - Returns: A `Movie` object that represents the captured movie.
func stopRecording() async throws -> Movie {
    // Use a continuation to adapt the delegate-based capture API to an async interface.
    return try await withCheckedThrowingContinuation { continuation in
        // Set the continuation on the delegate to handle the capture result.
        delegate?.continuation = continuation
        
        /// Stops recording, which causes the output to call the `MovieCaptureDelegate` object.
        movieOutput.stopRecording()
        stopMonitoringDuration()
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:record-a-movie:0055:0001">앱이 영화 파일 출력의 <a href="avcapturefileoutput/stoprecording(">@@TOKEN_0@@</a>.md) 메서드를 호출하면 시스템이 델리게이트를 호출하고, 델리게이트는 동영상을 반환하거나 오류를 발생시켜 실행을 재개합니다.</span>

```swift
func fileOutput(_ output: AVCaptureFileOutput, didFinishRecordingTo outputFileURL: URL, from connections: [AVCaptureConnection], error: Error?) {
    if let error {
        // If an error occurs, throw it to the caller.
        continuation?.resume(throwing: error)
    } else {
        // Return a new movie object.
        continuation?.resume(returning: Movie(url: outputFileURL))
    }
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0057:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0058:0001"><a href="setting-up-a-capture-session.md">캡처 세션 설정</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0059:0001">사진 또는 동영상을 캡처하기 전에 입력 장치, 출력 미디어, 미리보기 뷰, 기본 설정을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0060:0001"><a href="../AVKit/accessing-the-camera-while-multitasking-on-ipad.md">iPad에서 멀티태스킹 중 카메라 접근</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0061:0001">카메라를 Split View, Slide Over, Picture in Picture, Stage Manager 모드에서 작동합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0062:0001"><a href="capturing-cinematic-video.md">시네마틱 동영상 캡처</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0063:0001">심도와 초점점을 조정할 수 있는 동영상을 캡처합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0064:0001"><a href="avmulticampip-capturing-from-multiple-cameras.md">AVMultiCamPiP: 여러 카메라에서 캡처</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0065:0001">다중 카메라 캡처 세션을 사용해 전면 카메라와 후면 카메라의 출력을 하나의 동영상 파일로 동시에 녹화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0066:0001"><a href="avcambarcode-detecting-barcodes-and-faces.md">AVCamBarcode: 바코드 및 얼굴 감지</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0067:0001">카메라를 사용해 기계 판독 가능한 코드나 얼굴을 식별합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0068:0001"><a href="avcapturesession.md">class AVCaptureSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0069:0001">캡처 동작을 구성하고 입력 장치에서 캡처 출력으로의 데이터 흐름을 조정하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0070:0001"><a href="avcapturemulticamsession.md">class AVCaptureMultiCamSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0071:0001">동일한 미디어 유형의 여러 입력에서 동시 캡처를 지원하는 캡처 세션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0072:0001"><a href="avcaptureinput.md">class AVCaptureInput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0073:0001">캡처 세션에 입력 데이터를 제공하는 객체의 추상 슈퍼클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0074:0001"><a href="avcaptureoutput.md">class AVCaptureOutput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0075:0001">캡처 세션에 미디어 출력 대상을 제공하는 객체의 추상 슈퍼클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0076:0001"><a href="avcaptureconnection.md">class AVCaptureConnection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0077:0001">캡처 입력에서 캡처 출력으로의 연결을 나타내는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0079:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcam-building-a-camera-app">View on Apple Developer</a>*</span>
