---
source_path: "documentation/AVFoundation/avcapturesession/runtimeerrornotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/runtimeerrornotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:runtimeerrornotification:0000:0001">runtimeErrorNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:runtimeerrornotification:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:runtimeerrornotification:0002:0001">캡처 세션 중 오류가 발생할 때 시스템이 게시하는 알림입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:runtimeerrornotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:runtimeerrornotification:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:runtimeerrornotification:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:runtimeerrornotification:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:runtimeerrornotification:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:runtimeerrornotification:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:runtimeerrornotification:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let runtimeErrorNotification: NSNotification.Name
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">알림의 사용자 정보 사전에서 키 <a href="avcapturesessionerrorkey.md">@@TOKEN_0@@</a>를 사용해 기본 오류를 검색합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:user-info-keys:0010:0001">사용자 정보 키</span>

- <span class="ko-segment" data-segment-id="seg:list:user-info-keys:0011:0001"><a href="avcapturesessionerrorkey.md">let AVCaptureSessionErrorKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:user-info-keys:0012:0001"><a href="avcapturesession/runtimeerrornotification.md">@@TOKEN_0@@</a> 사용자 정보 사전에서 오류 객체를 검색할 수 있는 키입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturesession/isrunning.md">var isRunning: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처 세션이 실행 중인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturesession/isinterrupted.md">var isInterrupted: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">캡처 세션이 중단 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturesession/didstartrunningnotification.md">class let didStartRunningNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">캡처 세션이 시작될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturesession/didstoprunningnotification.md">class let didStopRunningNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">캡처 세션이 중지될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturesession/wasinterruptednotification.md">class let wasInterruptedNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">캡처 세션이 중단될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturesession/interruptionendednotification.md">class let interruptionEndedNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">캡처 세션의 중단이 종료될 때 시스템이 게시하는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/runtimeerrornotification">View on Apple Developer</a>*</span>
