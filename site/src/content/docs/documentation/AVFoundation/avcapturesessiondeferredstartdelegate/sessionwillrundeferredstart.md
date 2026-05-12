---
source_path: "documentation/AVFoundation/avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sessionwillrundeferredstart:0000:0001">sessionWillRunDeferredStart(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionwillrundeferredstart:0001:0001">**Framework**: AVFoundation **Kind**: method **Required**: Yes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionwillrundeferredstart:0002:0001">이 메서드는 세션에서 지연 시작이 곧 실행되기 직전에 호출됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionwillrundeferredstart:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sessionwillrundeferredstart:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwillrundeferredstart:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwillrundeferredstart:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwillrundeferredstart:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwillrundeferredstart:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sessionWillRunDeferredStart(_ session: AVCaptureSession)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">세션이 지연 시작을 완료하면 delegate는 이 메시지를 받습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 메시지는 세션의 <a href="avcapturesession/automaticallyrunsdeferredstart.md">@@TOKEN_0@@</a> 속성 설정 여부와 상관없이 전송됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">자세한 내용은 <a href="avcapturesession/setdeferredstartdelegate(_:deferredstartdelegatecallbackqueue:">@@TOKEN_0@@</a>.md) 문서를 참조합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>session</code>: 지연 시작을 실행하는 <a href="avcapturesession.md">@@TOKEN_1@@</a> 인스턴스입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturesessiondeferredstartdelegate/sessiondidrundeferredstart(_:">func sessionDidRunDeferredStart(AVCaptureSession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 메서드는 세션에서 지연 시작 실행이 완료되면 호출됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart(_:">View on Apple Developer</a>)*</span>
