---
source_path: "documentation/AVKit/accessing-the-camera-while-multitasking-on-ipad.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/accessing-the-camera-while-multitasking-on-ipad"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:accessing-the-camera-while-multitasking-on-ipad:0000:0001">iPad에서 멀티태스킹 중 카메라 액세스</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-camera-while-multitasking-on-ipad:0001:0001">**Framework**: AVKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-camera-while-multitasking-on-ipad:0002:0001">Split View, Slide Over, Picture in Picture, Stage Manager 모드에서 카메라를 작동할 수 있습니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">iPad에서 카메라 액세스는 일반적으로 전체 화면으로 실행 중인 앱에만 제한됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">앱이 Split View 또는 Stage Manager와 같은 멀티태스킹 모드로 전환되면 시스템은 기본적으로 카메라를 비활성화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0003">iPadOS 16 이상에서는 멀티태스킹 중에도 카메라 사용을 활성화하도록 앱을 설정할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0005:0001">**참고**: Session 110429: <a href="https://developer.apple.comhttps://developer.apple.com/videos/play/wwdc2022/110429/">@@TOKEN_0@@</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">멀티태스킹 모드를 사용하면 사용자가 여러 앱을 동시에 실행할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">네 가지 유형이 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0007:0001">Split View 모드는 화면을 크기 조정 가능한 뷰로 나누어 두 개의 다른 앱 또는 동일한 앱의 두 창을 수용합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0007:0002">Slide Over 모드는 열린 앱 앞에 슬라이드로 표시되는 앱에서 사용자가 작업할 수 있게 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0007:0003">Picture in Picture 모드는 앱 위에 드래그 가능한 창을 표시합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0007:0004">Stage Manager는 사용자가 창 크기를 조정하고 하나의 뷰에서 여러 겹치는 창을 볼 수 있으며, 특정 작업이나 프로젝트를 위해 앱을 그룹화하고, iPad와 외부 연결 디스플레이 간에 창을 드래그할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">멀티태스킹 카메라 액세스를 활성화하면 앱이 다른 전경 앱과 함께 실행될 수 있으므로 <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureSession/InterruptionReason/videoDeviceNotAvailableWithMultipleForegroundApps">@@TOKEN_0@@</a>를 더 이상 중단 이유로 받지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">카메라 캡처 시스템을 운영할 때 멀티태스킹 기능을 사용하면 메모리, CPU, GPU와 같은 리소스를 다른 앱이 소비하기 때문에 성능 저하 가능성이 생깁니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">디바이스 온도 및 전력 사용량이 증가하면 프레임 드롭이나 낮은 캡처 품질로 이어질 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0010:0001">❗ **중요**: 앱이 4K 동영상 캡처 또는 Apple ProRAW 또는 Deep Fusion 이미지 캡처처럼 리소스 집약적 기능을 사용하는 경우 멀티태스킹 카메라 액세스를 사용하도록 설정하지 않는 것이 좋습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0010:0002">앱이 리소스 집약적 기능을 사용하지 않더라도 성능 문제가 있는지 확인하려면 다른 리소스 집약형 앱과 Stage Manager를 함께 테스트합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">Split View 및 Slide Over 모드에 대한 자세한 내용은 <a href="https://developer.apple.comhttps://support.apple.com/en-us/HT207582">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0002">iPad의 Stage Manager에 대한 자세한 내용은 <a href="https://developer.apple.comhttps://support.apple.com/guide/ipad/move-resize-and-organize-windows-ipad1240f36f/ipados">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:enable-camera-access-while-multitasking:0012:0001">멀티태스킹 동안 카메라 액세스 활성화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-camera-access-while-multitasking:0013:0001">앱이 사진 또는 동영상을 캡처할 수 있도록 캡처 세션을 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-camera-access-while-multitasking:0013:0002">자세한 내용은 <a href="https://developer.apple.com/documentation/AVFoundation/setting-up-a-capture-session">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-camera-access-while-multitasking:0013:0003">현재 환경이 지원하는 경우 캡처 세션을 구성하여 멀티태스킹 중에도 카메라를 사용하도록 설정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-camera-access-while-multitasking:0013:0004">이 기능을 캡처 세션이 지원하는지 확인하려면 <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureSession/isMultitaskingCameraAccessSupported">@@TOKEN_0@@</a>을 조회합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-camera-access-while-multitasking:0013:0005">이 값이 <code>true</code>이면 아래 예제와 같이 <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureSession/isMultitaskingCameraAccessEnabled">@@TOKEN_1@@</a>을 <code>true</code>로 설정하여 멀티태스킹 카메라 액세스를 활성화할 수 있습니다:

``<code>swift
let captureSession = AVCaptureSession()

// Configure the capture session.
captureSession.beginConfiguration()

if captureSession.isMultitaskingCameraAccessSupported {
    // Enable use of the camera in multitasking modes.
    captureSession.isMultitaskingCameraAccessEnabled = true
}
captureSession.commitConfiguration()

// Start the capture session.
captureSession.startRunning()
</code>``</span>

```swift
let captureSession = AVCaptureSession()

// Configure the capture session.
captureSession.beginConfiguration()

if captureSession.isMultitaskingCameraAccessSupported {
    // Enable use of the camera in multitasking modes.
    captureSession.isMultitaskingCameraAccessEnabled = true
}
captureSession.commitConfiguration()

// Start the capture session.
captureSession.startRunning()
```

<span class="ko-segment" data-segment-id="seg:paragraph:enable-camera-access-while-multitasking:0015:0001">멀티태스킹 중에 앱의 카메라 사용을 허용하면 AVKit을 사용하는 비디오 통화의 Picture in Picture 모드로도 적용됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-camera-access-while-multitasking:0015:0002">자세한 내용은 <a href="adopting-picture-in-picture-for-video-calls.md">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-camera-access-while-multitasking:0016:0001">멀티태스킹 중 앱이 <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureMovieFileOutput">@@TOKEN_0@@</a> 또는 <a href="https://developer.apple.com/documentation/AVFoundation/AVAssetWriter">@@TOKEN_1@@</a>로 동영상 녹화를 완료하면 시스템은 낮은 품질 동영상이 생성될 가능성을 알려주기 위해 사용자에게 알림을 한 번만 표시합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:enable-camera-access-while-multitasking:0017:0001">❗ **중요**: iOS 16 이전의 배포 대상(deployment target)을 가진 앱은 멀티태스킹 중 카메라 액세스 허용을 위해 <a href="https://developer.apple.com/documentation/BundleResources/Entitlements/com.apple.developer.avfoundation.multitasking-camera-access">@@TOKEN_0@@</a> 엔타이틀먼트가 필요합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:configure-your-app-for-split-view-or-slide-over-mode:0018:0001">Split View 또는 Slide Over 모드용 앱 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-your-app-for-split-view-or-slide-over-mode:0019:0001">멀티태스킹 카메라 액세스를 활성화하면 카메라를 사용하기 위해 앱이 전체 화면 모드로 실행될 필요가 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-your-app-for-split-view-or-slide-over-mode:0019:0002">전체 화면 모드로 실행되는 경우에도 시스템이 앱 위에 Picture in Picture 창을 표시할 때와 Slide Over 모드에서 카메라는 계속 동작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configure-your-app-for-split-view-or-slide-over-mode:0019:0003">앱을 Split View 또는 Slide Over 모드에서도 실행하려면 다음 단계를 수행합니다.</span>

1. <span class="ko-segment" data-segment-id="seg:list:configure-your-app-for-split-view-or-slide-over-mode:0020:0001">Xcode의 프로젝트 편집기에서 앱 대상을 선택합니다.</span>
2. <span class="ko-segment" data-segment-id="seg:list:configure-your-app-for-split-view-or-slide-over-mode:0020:0002"><code>General</code> 탭을 클릭합니다.</span>
3. <span class="ko-segment" data-segment-id="seg:list:configure-your-app-for-split-view-or-slide-over-mode:0020:0003">“Requires full screen” 확인란의 선택을 해제합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:respond-to-system-pressure:0021:0001">시스템 압력 대응</span>

<span class="ko-segment" data-segment-id="seg:paragraph:respond-to-system-pressure:0022:0001"><a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureDevice">@@TOKEN_0@@</a>의 <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureDevice/systemPressureState-swift.property">@@TOKEN_1@@</a> 속성을 모니터링하여 시스템 압력 증가에 대비하고 영향을 줄이는 조치를 취합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:respond-to-system-pressure:0022:0002">압력이 과도한 수준에 도달하면 캡처 시스템이 종료되고 <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureSession/wasInterruptedNotification">@@TOKEN_0@@</a> 알림이 발행됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:respond-to-system-pressure:0023:0001">앱은 프레임 속도를 낮추거나 저해상도, binned, 비 HDR 형식을 요청하여 시스템에 대한 부하를 줄일 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:respond-to-system-pressure:0023:0002">다음 코드는 샘플 앱 <a href="https://developer.apple.com/documentation/AVFoundation/avmulticampip-capturing-from-multiple-cameras">@@TOKEN_0@@</a>에서 가져온 것으로, 캡처 프레임 속도를 낮추는 방법을 보여줍니다:

``<code>swift
let systemPressureStateObservation = observe(\\.self.device.systemPressureState, 
                                             options: .new) { [weak self] _, change in
    guard let self = self else { return }
    guard let systemPressureState = change.newValue else { return }

    // The frame rates here are for demonstrative purposes only.
    // Frame rate throttling can differ depending on your app's camera configuration.
    let pressureLevel = systemPressureState.level
    if pressureLevel == .serious || pressureLevel == .critical {
        do {
            try self.device.lockForConfiguration()

            print(&quot;WARNING: Reached elevated system pressure level: \\(pressureLevel). Throttling frame rate.&quot;)

            self.device.activeVideoMinFrameDuration = CMTimeMake(value: 1, timescale: 20)
            self.device.activeVideoMaxFrameDuration = CMTimeMake(value: 1, timescale: 15)

            self.device.unlockForConfiguration()
        } catch {
            print(&quot;Could not lock device for configuration: \\(error)&quot;)
        }
    } else if pressureLevel == .shutdown {
        print(&quot;Session stopped running due to system pressure level.&quot;)
    }
}
</code>``</span>

```swift
let systemPressureStateObservation = observe(\.self.device.systemPressureState, 
                                             options: .new) { [weak self] _, change in
    guard let self = self else { return }
    guard let systemPressureState = change.newValue else { return }

    // The frame rates here are for demonstrative purposes only.
    // Frame rate throttling can differ depending on your app's camera configuration.
    let pressureLevel = systemPressureState.level
    if pressureLevel == .serious || pressureLevel == .critical {
        do {
            try self.device.lockForConfiguration()

            print("WARNING: Reached elevated system pressure level: \(pressureLevel). Throttling frame rate.")

            self.device.activeVideoMinFrameDuration = CMTimeMake(value: 1, timescale: 20)
            self.device.activeVideoMaxFrameDuration = CMTimeMake(value: 1, timescale: 15)

            self.device.unlockForConfiguration()
        } catch {
            print("Could not lock device for configuration: \(error)")
        }
    } else if pressureLevel == .shutdown {
        print("Session stopped running due to system pressure level.")
    }
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:handle-camera-use-interruptions:0025:0001">카메라 사용 중단 처리</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-camera-use-interruptions:0026:0001">시스템은 한 번에 하나의 앱만 장치의 카메라를 사용하도록 허용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-camera-use-interruptions:0026:0002">다른 앱이 카메라 사용을 시작할 때 앱이 대응할 수 있도록 준비합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-camera-use-interruptions:0026:0003">예를 들어 앱이 Stage Manager에서 실행 중이고 다른 앱이 카메라를 사용하면 시스템은 다른 앱이 완료될 때까지 앱의 카메라 사용을 일시 중단합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-camera-use-interruptions:0026:0004">시스템이 앱의 카메라 사용을 중단하면 앱에 알림을 보내 사용자 인터페이스를 업데이트할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handle-camera-use-interruptions:0027:0001">시스템에서 앱의 카메라 접근이 변경될 때 알림을 받으려면 아래 예제에서처럼 <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureSession/wasInterruptedNotification">@@TOKEN_0@@</a> 및 <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureSession/interruptionEndedNotification">@@TOKEN_1@@</a>을 관찰합니다.</span>

```swift
func addObservers() {
    let nc = NotificationCenter.default

    // Observe when the system interrupts the capture session.
    nc.addObserver(self,
                   selector: #selector(handleInterruptionStarted),
                   name: .AVCaptureSessionWasInterrupted,
                   object: captureSession)

    // Observe when the capture session interruption ends.
    nc.addObserver(self,
                   selector: #selector(handleInterruptionEnded),
                   name: .AVCaptureSessionInterruptionEnded,
                   object: captureSession)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:handle-camera-use-interruptions:0029:0001">알림 객체의 사용자 정보 딕셔너리에는 중단 사유가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-camera-use-interruptions:0029:0002">중단 사유를 확인하면 카메라 접근이 변경될 때 사용자 인터페이스를 구성할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:handle-camera-use-interruptions:0029:0003">다음 예제에서 보여 주듯이 <code>doc://com.apple.documentation/documentation/avfoundation/avcapturesessioninterruptionreasonkey</code>를 사용하여 값을 조회합니다.</span>

```swift
@objc func handleInterruptionStarted(notification: Notification) {
    guard let userInfo = notification.userInfo,
          let reasonValue = userInfo[AVCaptureSessionInterruptionReasonKey] as? Int,
          let reason = AVCaptureSession.InterruptionReason(rawValue: reasonValue) else {
        print(“Failed to parse the interruption reason.”)
        return
    }

    switch reason {
    case .videoDeviceInUseByAnotherClient:
        // Show your app's interruption user interface.
    case .videoDeviceNotAvailableDueToSystemPressure:
        // Handle an interruption from increasing system pressure.
    default:
        // Handle other interruption reasons.
    }
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0031:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="adopting-picture-in-picture-playback-in-tvos.md">Adopting Picture in Picture Playback in tvOS</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">tvOS의 Picture in Picture 재생을 사용해 비디오 앱에 고급 멀티태스킹 기능을 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="adopting-picture-in-picture-in-a-standard-player.md">Adopting Picture in Picture in a Standard Player</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">player view controller를 사용해 앱에 Picture in Picture(PiP) 재생을 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="adopting-picture-in-picture-in-a-custom-player.md">Adopting Picture in Picture in a Custom Player</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">커스텀 플레이어 사용자 인터페이스에 Picture in Picture(PiP) 재생을 호출하는 컨트롤을 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="adopting-picture-in-picture-for-video-calls.md">Adopting Picture in Picture for video calls</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Picture in Picture(PiP)를 사용해 비디오 통화 앱에 멀티태스킹 기능을 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="avpictureinpicturecontroller.md">class AVPictureInPictureController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">부동 창의 크기 조절 가능한 창에서 사용자가 시작한 비디오의 Picture in Picture 재생에 응답하는 컨트롤러입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/avkit/accessing-the-camera-while-multitasking-on-ipad">View on Apple Developer</a>*</span>
