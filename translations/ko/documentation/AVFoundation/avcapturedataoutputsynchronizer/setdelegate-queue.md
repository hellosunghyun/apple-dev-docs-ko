---
source_path: "documentation/AVFoundation/avcapturedataoutputsynchronizer/setdelegate-queue.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer/setdelegate-queue"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setdelegatequeue:0000:0001">setDelegate(_:queue:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdelegatequeue:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdelegatequeue:0002:0001">Designates a delegate object to receive synchronized data and a dispatch queue for delivering that data.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdelegatequeue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setDelegate(_ delegate: (any AVCaptureDataOutputSynchronizerDelegate)?, queue delegateCallbackQueue: dispatch_queue_t?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The data output synchronizer gathers data from its data outputs, and when it determines that all data has been received for a given timestamp, it vends collections of synchronized data by calling delegate methods on the specified dispatch queue.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The <a href="avcapturedataoutputsynchronizer.md">@@TOKEN_0@@</a> class overrides all the data outputs’ own delegates and callbacks.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">Data outputs under the control of a data output synchronizer do not fire delegate callbacks.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">Delegate callbacks are restored to individual data outputs only if you clear the synchronizer’s delegate and callback queue by calling this method and passing <code>nil</code> for both parameters.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>session</code>: 정보를 제공하는 세션입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>delegateCallbackQueue</code>: The dispatch queue on which to call delegate methods. This parameter must be a serial dispatch queue to guarantee that captured data is delivered in order.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedataoutputsynchronizer/delegate.md">var delegate: (any AVCaptureDataOutputSynchronizerDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">A delegate object that receives synchronized capture data.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedataoutputsynchronizer/delegatecallbackqueue.md">var delegateCallbackQueue: dispatch_queue_t?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">A dispatch queue for delivering synchronized capture data.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedataoutputsynchronizerdelegate.md">protocol AVCaptureDataOutputSynchronizerDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/arkit/arsessionobserver/sessionwasinterrupted(_:">Apple Developer에서 보기</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizer/setdelegate(_:queue:">View on Apple Developer</a>)*</span>
