---
source_path: "documentation/AVFoundation/avcaptureoutput/datadroppedreason/latedata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureoutput/datadroppedreason/latedata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcaptureoutputdatadroppedreasonlatedata:0000:0001">AVCaptureOutput.DataDroppedReason.lateData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptureoutputdatadroppedreasonlatedata:0001:0001">**Framework**: AVFoundation **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptureoutputdatadroppedreasonlatedata:0002:0001">델리게이트 큐가 차단된 상태에서 전달할 데이터가 존재하도록 capture output을 데이터 드롭 상태로 구성했기 때문에 시스템이 데이터를 버렸습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptureoutputdatadroppedreasonlatedata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcaptureoutputdatadroppedreasonlatedata:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptureoutputdatadroppedreasonlatedata:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptureoutputdatadroppedreasonlatedata:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptureoutputdatadroppedreasonlatedata:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptureoutputdatadroppedreasonlatedata:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptureoutputdatadroppedreasonlatedata:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case lateData
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>AVCaptureVideoDataOutput</code>의 <a href="avcapturevideodataoutput/alwaysdiscardslatevideoframes.md">@@TOKEN_1@@</a> 속성 또는 <code>AVCaptureDepthDataOutput</code>의 <a href="avcapturedepthdataoutput/alwaysdiscardslatedepthdata.md">@@TOKEN_3@@</a> 속성을 사용해 capture output이 데이터를 버릴지 여부를 선택합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcaptureoutput/datadroppedreason/none.md">AVCaptureOutput.DataDroppedReason.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">시스템이 데이터를 버리지 않았습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcaptureoutput/datadroppedreason/outofbuffers.md">AVCaptureOutput.DataDroppedReason.outOfBuffers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템은 capture output이 내부 메모리 버퍼 풀이 소진되어 데이터가 버려졌습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcaptureoutput/datadroppedreason/discontinuity.md">AVCaptureOutput.DataDroppedReason.discontinuity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesessiondeferredstartdelegate/sessionwillrundeferredstart(_:">View on Apple Developer</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureoutput/datadroppedreason/latedata">View on Apple Developer</a>*</span>
