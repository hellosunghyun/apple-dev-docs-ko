---
source_path: "documentation/AVFoundation/avcapturedeskviewapplication.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedeskviewapplication"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturedeskviewapplication:0000:0001">AVCaptureDeskViewApplication</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeskviewapplication:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeskviewapplication:0002:0001">Desk View를 프로그래밍 방식으로 표시하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeskviewapplication:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturedeskviewapplication:0004:0001">Mac Catalyst 16.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeskviewapplication:0004:0002">macOS 13.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVCaptureDeskViewApplication
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 클래스를 사용하면 앱에서 Desk View를 프로그래밍 방식으로 시작할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">원하면 표시를 커스텀하고, 이후 수행할 동작을 지정할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0009:0001">**참고**: Desk View는 macOS 13 이상을 실행하는 Mac과 함께 사용할 수 있으며, iPhone SE를 제외한 iPhone 11 이상에서 iOS 16 이상에서 사용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">다음 예제는 completion handler와 함께 Desk View를 구성하고 표시하는 방법을 보여줍니다.</span>

```swift
let deskView = AVCaptureDeskViewApplication()
let configuration = AVCaptureDeskViewApplication.LaunchConfiguration()

// Use the previously set frame.
configuration.mainWindowFrame = .zero

// Execute the completion handler when the user starts Desk View.
configuration.requiresSetUpModeCompletion = true

// Launch Desk View with a configuration and completion handler.
deskView.present(launchConfiguration: configuration) { error in
    // Perform error handling and additional tasks.
}
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:presenting-the-desk-view-app:0013:0001">Desk View 앱 표시</span>

- <span class="ko-segment" data-segment-id="seg:list:presenting-the-desk-view-app:0014:0001"><a href="avcapturedeskviewapplication/present(completionhandler:">func present(completionHandler: (((any Error)?) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:presenting-the-desk-view-app:0015:0001">추가 구성을 사용하지 않고 Desk View를 시작한 다음, 지정한 경우 completion handler를 실행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:presenting-the-desk-view-app:0016:0001"><a href="avcapturedeskviewapplication/present(launchconfiguration:completionhandler:">func present(launchConfiguration: AVCaptureDeskViewApplication.LaunchConfiguration, completionHandler: (((any Error)?) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:presenting-the-desk-view-app:0017:0001">지정한 구성 및 completion handler를 사용해 Desk View를 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:presenting-the-desk-view-app:0018:0001"><a href="avcapturedeskviewapplication/launchconfiguration.md">AVCaptureDeskViewApplication.LaunchConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:presenting-the-desk-view-app:0019:0001">Desk View 표시 방식을 구성하는 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0020:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0021:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0022:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0023:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="../AVKit/supporting-continuity-camera-in-your-tvos-app.md">Supporting Continuity Camera in your tvOS app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">iPhone 또는 iPad를 연속성 디바이스로 연결하여 Apple TV 앱에서 고품질 사진, 비디오 및 오디오를 캡처할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="supporting-continuity-camera-in-your-macos-app.md">Supporting Continuity Camera in your macOS app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/istorchmodesupported(_:">View on Apple Developer</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedeskviewapplication">View on Apple Developer</a>*</span>
