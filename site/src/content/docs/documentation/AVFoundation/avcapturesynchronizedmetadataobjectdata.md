---
source_path: "documentation/AVFoundation/avcapturesynchronizedmetadataobjectdata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedmetadataobjectdata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturesynchronizedmetadataobjectdata:0000:0001">AVCaptureSynchronizedMetadataObjectData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturesynchronizedmetadataobjectdata:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturesynchronizedmetadataobjectdata:0002:0001">동기화 캡처를 사용해 수집한 메타데이터 객체를 보관하는 컨테이너입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturesynchronizedmetadataobjectdata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturesynchronizedmetadataobjectdata:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesynchronizedmetadataobjectdata:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesynchronizedmetadataobjectdata:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesynchronizedmetadataobjectdata:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVCaptureSynchronizedMetadataObjectData
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-synchronized-data:0008:0001">동기화된 데이터 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-synchronized-data:0009:0001">[var metadataObjects: [AVMetadataObject]](avcapturesynchronizedmetadataobjectdata/metadataobjects.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-synchronized-data:0010:0001">이 동기화 타임스탬프에서 캡처된 메타데이터 객체 목록입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0011:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0012:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0013:0001"><a href="avcapturesynchronizeddata.md">AVCaptureSynchronizedData</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0014:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedataoutputsynchronizer.md">class AVCaptureDataOutputSynchronizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">여러 캡처 출력에서 시간 동기화된 데이터의 전달을 조정하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturesynchronizeddatacollection.md">class AVCaptureSynchronizedDataCollection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">여러 캡처 출력에서 동시에 수집한 데이터 샘플 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturesynchronizedsamplebufferdata.md">class AVCaptureSynchronizedSampleBufferData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">동기화된 캡처로 수집한 비디오 또는 오디오 샘플을 위한 컨테이너입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturesynchronizeddepthdata.md">class AVCaptureSynchronizedDepthData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">동기화된 캡처로 수집한 장면 깊이 정보용 컨테이너입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturesynchronizeddata.md">class AVCaptureSynchronizedData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">동기화된 캡처로 수집한 미디어 샘플의 추상 슈퍼클래스입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesynchronizedmetadataobjectdata">View on Apple Developer</a>*</span>
