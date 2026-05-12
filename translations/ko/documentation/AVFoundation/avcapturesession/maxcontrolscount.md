---
source_path: "documentation/AVFoundation/avcapturesession/maxcontrolscount.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/maxcontrolscount"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:maxcontrolscount:0000:0001">maxControlsCount</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxcontrolscount:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxcontrolscount:0002:0001">캡처 세션이 지원하는 제어의 최대 개수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxcontrolscount:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:maxcontrolscount:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxcontrolscount:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxcontrolscount:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxcontrolscount:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxcontrolscount:0004:0005">tvOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var maxControlsCount: Int { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="enhancing-your-app-experience-with-the-camera-control.md">Enhancing your app experience with the Camera Control</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturesession/supportscontrols.md">var supportsControls: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">캡처 세션에서 제어를 지원하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var controls: [AVCaptureControl]](averror-swift.struct/airplayreceiverrequiresinternet.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">디바이스 하드웨어에서 카메라 시스템을 구성할 수 있게 하는 제어입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="averror-swift.struct/airplayreceivertemporarilyunavailable.md">func canAddControl(AVCaptureControl) -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처 세션에서 지정한 제어를 추가할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="averror-swift.struct/applicationisnotauthorizedtousedevice.md">func addControl(AVCaptureControl)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">캡처 세션에 제어를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="averror-swift.struct/applicationisnotauthorized.md">func removeControl(AVCaptureControl)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">캡처 세션에서 제어를 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturesession/setcontrolsdelegate(_:queue:">func setControlsDelegate((any AVCaptureSessionControlsDelegate)?, queue: dispatch_queue_t?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">시스템이 제어를 활성화하고 표시할 때 호출할 델리게이트 객체를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturesessioncontrolsdelegate.md">protocol AVCaptureSessionControlsDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">캡처 제어 활성화 및 표시 이벤트에 응답하기 위한 인터페이스를 정의하는 프로토콜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturesession/controlsdelegate.md">var controlsDelegate: (any AVCaptureSessionControlsDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">캡처 제어 상태 변경을 관찰하는 델리게이트 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avcapturesession/controlsdelegatecallbackqueue.md">var controlsDelegateCallbackQueue: dispatch_queue_t?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">시스템이 controls 델리게이트 메서드를 호출하는 디스패치 큐입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/maxcontrolscount">View on Apple Developer</a>*</span>
