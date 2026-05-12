---
source_path: "documentation/AVFoundation/avcapturesession/interruptionreason.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/interruptionreason"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturesessioninterruptionreason:0000:0001">AVCaptureSession.InterruptionReason</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturesessioninterruptionreason:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturesessioninterruptionreason:0002:0001"><a href="avcapturesession/wasinterruptednotification.md">@@TOKEN_0@@</a> 사용자 정보 사전에서 캡처 세션이 중단된 이유를 식별하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturesessioninterruptionreason:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturesessioninterruptionreason:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesessioninterruptionreason:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesessioninterruptionreason:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesessioninterruptionreason:0004:0004">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesessioninterruptionreason:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum InterruptionReason
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:constants:0008:0001">Constants</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0009:0001"><a href="avcapturesession/interruptionreason/videodevicenotavailableinbackground.md">AVCaptureSession.InterruptionReason.videoDeviceNotAvailableInBackground</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0010:0001">카메라 사용 중 앱이 백그라운드로 전환되어 발생한 중단입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0011:0001"><a href="avcapturesession/interruptionreason/audiodeviceinusebyanotherclient.md">AVCaptureSession.InterruptionReason.audioDeviceInUseByAnotherClient</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0012:0001">오디오 하드웨어가 일시적으로 사용 불가능해져서(예: 전화 통화 또는 알람) 발생한 중단입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0013:0001"><a href="avcapturesession/interruptionreason/videodeviceinusebyanotherclient.md">AVCaptureSession.InterruptionReason.videoDeviceInUseByAnotherClient</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0014:0001">비디오 장치가 일시적으로 사용 불가능해져서(예: 다른 캡처 세션에서 사용 중) 발생한 중단입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0015:0001"><a href="avcapturesession/interruptionreason/videodevicenotavailablewithmultipleforegroundapps.md">AVCaptureSession.InterruptionReason.videoDeviceNotAvailableWithMultipleForegroundApps</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0016:0001">iPad에서 앱이 Slide Over, Split View 또는 Picture in Picture 모드로 실행될 때 발생한 중단입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0017:0001"><a href="avcapturesession/interruptionreason/videodevicenotavailableduetosystempressure.md">AVCaptureSession.InterruptionReason.videoDeviceNotAvailableDueToSystemPressure</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0018:0001">열 과부하와 같은 시스템 압력으로 인해 발생한 중단입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0019:0001"><a href="avcapturesession/interruptionreason/sensitivecontentmitigationactivated.md">AVCaptureSession.InterruptionReason.sensitiveContentMitigationActivated</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0020:0001">연결된 <a href="avcapturedeviceinput.md">@@TOKEN_0@@</a>에서 민감한 콘텐츠가 감지되면 <code>SCVideoStreamAnalyzer</code>가 발생시키는 중단입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:constants:0020:0002">캡처 세션을 다시 시작하려면 분석기의 <code>SCVideoStreamAnalyzer/continueStream</code> 메서드를 호출합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0021:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0022:0001"><a href="avcapturesession/interruptionreason/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0023:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0024:0001">준수 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0026:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturesessioninterruptionsystempressurestatekey.md">let AVCaptureSessionInterruptionSystemPressureStateKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">중단을 일으킨 시스템 압력 수준과 기여 요인을 나타내는 상태 값을 가져오는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcapturesessioninterruptionreasonkey.md">let AVCaptureSessionInterruptionReasonKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001"><a href="avcapturesession/wasinterruptednotification.md">@@TOKEN_0@@</a> 사용자 정보 사전에서 캡처 중단 정보를 가져오는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/interruptionreason">View on Apple Developer</a>*</span>
