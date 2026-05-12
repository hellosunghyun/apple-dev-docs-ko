---
source_path: "documentation/AVFoundation/avcapturesynchronizeddatacollection/synchronizeddata-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection/synchronizeddata-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:synchronizeddatafor:0000:0001">synchronizedData(for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizeddatafor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizeddatafor:0002:0001">지정된 캡처 출력에서 캡처한 동기화 데이터를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizeddatafor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:synchronizeddatafor:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizeddatafor:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizeddatafor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizeddatafor:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func synchronizedData(for captureOutput: AVCaptureOutput) -> AVCaptureSynchronizedData?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정된 capture output에 해당하는 동기화 데이터 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>captureOutput</code>: 데이터를 검색할 capture output입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturesynchronizeddatacollection/count.md">var count: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">컬렉션에 있는 동기화 데이터 객체의 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturesynchronizeddatacollection/subscript(_:">subscript(AVCaptureOutput) -&gt; AVCaptureSynchronizedData?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">subscript 구문을 사용해 지정된 capture output으로 캡처한 데이터를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection/synchronizeddata(for:">View on Apple Developer</a>)*</span>
