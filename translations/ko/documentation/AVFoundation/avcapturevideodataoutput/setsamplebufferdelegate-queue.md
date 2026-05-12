---
source_path: "documentation/AVFoundation/avcapturevideodataoutput/setsamplebufferdelegate-queue.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/setsamplebufferdelegate-queue"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setsamplebufferdelegatequeue:0000:0001">setSampleBufferDelegate(_:queue:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setsamplebufferdelegatequeue:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setsamplebufferdelegatequeue:0002:0001">sample buffer delegate와 콜백 호출용 큐를 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setsamplebufferdelegatequeue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setsamplebufferdelegatequeue:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setsamplebufferdelegatequeue:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setsamplebufferdelegatequeue:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setsamplebufferdelegatequeue:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:setsamplebufferdelegatequeue:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setsamplebufferdelegatequeue:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setSampleBufferDelegate(_ sampleBufferDelegate: (any AVCaptureVideoDataOutputSampleBufferDelegate)?, queue sampleBufferCallbackQueue: dispatch_queue_t?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">새 비디오 sample buffer가 캡처되면 <a href="avcapturevideodataoutputsamplebufferdelegate/captureoutput(_:didoutput:from:">@@TOKEN_0@@</a>.md)를 통해 sample buffer가 sample buffer delegate로 전송됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">모든 delegate 메서드는 지정된 dispatch queue에서 호출됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">큐가 차단된 상태에서 새 프레임이 캡처되면, 해당 프레임은 <a href="avcapturevideodataoutput/alwaysdiscardslatevideoframes.md">@@TOKEN_0@@</a> 속성 값에 따라 자동으로 삭제됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이렇게 하면 들어오는 프레임 처리 속도를 따라가지 못할 때 기존 프레임을 처리하는 동안 발생할 수 있는 잠재적 메모리 사용량 증가를 별도로 관리하지 않아도 동일한 큐에서 처리할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">프레임 처리 속도가 지속적으로 들어오는 프레임 속도를 따라가지 못한다면 <a href="avcapturevideodataoutput/minframeduration.md">@@TOKEN_0@@</a> 속성을 사용하는 것이 좋습니다. 이 방법은 프레임 드롭만 사용하는 경우보다 일반적으로 성능 특성이 더 좋고 프레임 속도가 더 일관됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">프레임이 버려질 가능성을 최소화하려면 sample buffer를 받는 처리 외부에서 충분히 적은 양의 처리가 수행되는 큐를 지정해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">그러나 추가 처리를 다른 큐로 이동하면, 처리되지 않은 프레임으로 인해 메모리 사용량이 무한정 증가하지 않도록 보장할 책임이 있습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:special-considerations:0012:0001">특수 고려 사항</span>

<span class="ko-segment" data-segment-id="seg:paragraph:special-considerations:0013:0001">이 메서드는 큐를 관리하기 위해 <a href="https://developer.apple.com/documentation/Dispatch/dispatch_retain">@@TOKEN_0@@</a> 및 <a href="https://developer.apple.com/documentation/Dispatch/dispatch_release">@@TOKEN_1@@</a>를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0014:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0001"><code>sampleBufferDelegate</code>: 캡처 후 sample buffer를 수신할 <a href="avcapturevideodataoutputsamplebufferdelegate.md">@@TOKEN_1@@</a> 프로토콜을 준수하는 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0002"><code>sampleBufferCallbackQueue</code>: 콜백이 호출될 큐입니다. 비디오 프레임이 순서대로 전달되도록 직렬 dispatch queue를 사용해야 합니다. <code>sampleBufferDelegate</code>를 <code>nil</code>로 설정할 때를 제외하고 <code>sampleBufferCallbackQueue</code> 매개변수는 <code>NULL</code>일 수 없습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturevideodataoutput/samplebufferdelegate.md">var sampleBufferDelegate: (any AVCaptureVideoDataOutputSampleBufferDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">캡처 객체의 delegate입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturevideodataoutput/samplebuffercallbackqueue.md">var sampleBufferCallbackQueue: dispatch_queue_t?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">시스템이 delegate 콜백을 호출하는 큐입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturevideodataoutputsamplebufferdelegate.md">protocol AVCaptureVideoDataOutputSampleBufferDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">비디오 데이터 출력에서 sample buffer를 수신하고 상태를 모니터링하는 메서드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/setsamplebufferdelegate(_:queue:">View on Apple Developer</a>)*</span>
