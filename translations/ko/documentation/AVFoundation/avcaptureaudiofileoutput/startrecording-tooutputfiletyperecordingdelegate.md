---
source_path: "documentation/AVFoundation/avcaptureaudiofileoutput/startrecording-tooutputfiletyperecordingdelegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/startrecording-tooutputfiletyperecordingdelegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:startrecordingtooutputfiletyperecordingdelegate:0000:0001">startRecording(to:outputFileType:recordingDelegate:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:startrecordingtooutputfiletyperecordingdelegate:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:startrecordingtooutputfiletyperecordingdelegate:0002:0001">수신자에게 지정한 형식의 새 파일로 녹음을 시작하도록 지시하며, 녹음이 완료되면 알림을 받을 델리게이트를 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:startrecordingtooutputfiletyperecordingdelegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:startrecordingtooutputfiletyperecordingdelegate:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func startRecording(to outputFileURL: URL, outputFileType fileType: AVFileType, recordingDelegate delegate: any AVCaptureFileOutputRecordingDelegate)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">다른 녹음이 진행 중일 때도 이 메서드를 호출하기 전에 <a href="avcapturefileoutput/stoprecording(">@@TOKEN_0@@</a>.md)을 호출할 필요가 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이미 기존 출력 파일이 녹화 중일 때 이 메서드를 호출하면 이전 파일과 새 파일 사이에 미디어 샘플이 삭제되지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">녹음이 <code>stopRecording</code> 호출, 이 메서드로 파일 변경, 또는 오류 발생으로 중지되면 파일에 포함되어야 할 남은 데이터가 백그라운드에서 쓰여집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">따라서 <a href="avcapturefileoutputrecordingdelegate/fileoutput(_:didfinishrecordingto:from:error:">@@TOKEN_0@@</a>.md) 메서드를 통해 모든 데이터가 파일에 쓰인 시점에 알림을 받을 델리게이트를 지정해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">녹음 델리게이트는 데이터 쓰기 시작, 녹음 일시 중지 및 재개, 녹음이 곧 종료됨을 알리는 메서드를 선택적으로 구현할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">macOS에서 이 메서드를 <a href="avcaptureaudiodataoutputsamplebufferdelegate/captureoutput(_:didoutput:from:">@@TOKEN_0@@</a>.md) 델리게이트 메서드 내에서 호출하면, 새 파일에 먼저 기록되는 샘플은 해당 메서드로 전달된 샘플 버퍼에 포함된 샘플이 보장됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>outputFileURL</code>: 출력 파일의 URL입니다. URL이 유효한 파일 URL이 아니면 이 메서드는 <a href="https://developer.apple.com/documentation/Foundation/NSExceptionName/invalidArgumentException">@@TOKEN_1@@</a>을 throw합니다. 캡처가 시작될 때 지정된 URL에 파일이 이미 있으면 새 파일에 대한 녹음이 실패합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>fileType</code>: 작성할 파일 형식을 나타내는 UTI입니다. 일반적인 오디오 파일 형식의 UTI는 <code>AVMediaFormat.h</code>에 선언되어 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>delegate</code>: <a href="avcapturefileoutputrecordingdelegate.md">@@TOKEN_1@@</a> 프로토콜을 준수하는 객체입니다. 녹음이 완료되면 알림을 받을 델리게이트를 지정해야 합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/startrecording(to:outputfiletype:recordingdelegate:">View on Apple Developer</a>)*</span>
