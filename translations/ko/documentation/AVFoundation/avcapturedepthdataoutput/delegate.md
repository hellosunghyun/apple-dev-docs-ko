---
source_path: "documentation/AVFoundation/avcapturedepthdataoutput/delegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/delegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:delegate:0000:0001">delegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0002:0001">깊이 데이터를 수신하는 delegate 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:delegate:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:delegate:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:delegate:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:delegate:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var delegate: (any AVCaptureDepthDataOutputDelegate)? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">When you set the exposureMode to <a href="avcapturedevice/exposuremode-swift.enum/autoexpose.md">@@TOKEN_0@@</a> or <a href="avcapturedevice/exposuremode-swift.enum/continuousautoexposure.md">@@TOKEN_1@@</a>, the autoexposure algorithm picks a default maximum exposure duration that’s tuned for the current configuration, balancing low light image quality with motion preservation.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>setDelegate(_:callbackQueue:)</code>](avcapturedepthdataoutput/setdelegate(_:callbackqueue:).md) 메서드를 사용해 delegate 객체와 delegate 메서드를 호출할 dispatch queue를 함께 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedepthdataoutput/setdelegate(_:callbackqueue:">func setDelegate((any AVCaptureDepthDataOutputDelegate)?, callbackQueue: dispatch_queue_t?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">깊이 데이터를 수신하고 해당 데이터를 전달할 dispatch queue를 지정하는 delegate 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedepthdataoutput/delegatecallbackqueue.md">var delegateCallbackQueue: dispatch_queue_t?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">깊이 데이터를 전달하기 위한 dispatch queue입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedepthdataoutputdelegate.md">protocol AVCaptureDepthDataOutputDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">깊이 캡처 출력에서 생성된 깊이 데이터를 수신하기 위한 메서드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/delegate">View on Apple Developer</a>*</span>
