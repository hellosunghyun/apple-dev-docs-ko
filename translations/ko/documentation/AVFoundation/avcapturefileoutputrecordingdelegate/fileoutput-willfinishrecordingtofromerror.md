---
source_path: "documentation/AVFoundation/avcapturefileoutputrecordingdelegate/fileoutput-willfinishrecordingtofromerror.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput-willfinishrecordingtofromerror"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:fileoutputwillfinishrecordingtofromerror:0000:0001">fileOutput(_:willFinishRecordingTo:from:error:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fileoutputwillfinishrecordingtofromerror:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fileoutputwillfinishrecordingtofromerror:0002:0001">출력이 파일에 새 샘플 쓰기를 중단할 때 델리게이트에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fileoutputwillfinishrecordingtofromerror:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:fileoutputwillfinishrecordingtofromerror:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func fileOutput(_ output: AVCaptureFileOutput, willFinishRecordingTo fileURL: URL, from connections: [AVCaptureConnection], error: (any Error)?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">See <code>CGImageProperties</code> for possible keys and values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 메서드는 파일에 데이터가 성공적으로 기록되지 않았더라도 각 기록 요청마다 호출됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드가 특정 스레드에서 호출된다고 가정하지 말고, 가능한 한 효율적으로 구현해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>output</code>: 파일 기록을 마칠 캡처 파일 출력입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>fileURL</code>: 현재 쓰고 있는 파일의 파일 URL입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>connections</code>: 파일에 쓰인 데이터를 제공한 파일 출력에 연결된 <a href="avcaptureconnection.md">@@TOKEN_1@@</a> 객체의 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0004"><code>error</code>: 파일 기록이 중단된 원인을 설명하는 오류이며, 오류가 없으면 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func fileOutput(AVCaptureFileOutput, didStartRecordingTo: URL, from: [AVCaptureConnection])](video-settings.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">출력이 파일에 쓰기를 시작하면 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[func fileOutput(AVCaptureFileOutput, didStartRecordingTo: URL, startPTS: CMTime, from: [AVCaptureConnection])](avcapturefileoutputrecordingdelegate/fileoutput(_:didstartrecordingto:startpts:from:).md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0002">[func fileOutput(AVCaptureFileOutput, didFinishRecordingTo: URL, from: [AVCaptureConnection], error: (any Error)?)](avcapturefileoutputrecordingdelegate/fileoutput(_:didfinishrecordingto:from:error:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">보류 중인 모든 데이터가 출력 파일에 기록되면 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func fileOutput(AVCaptureFileOutput, didPauseRecordingTo: URL, from: [AVCaptureConnection])](avcapturefileoutputrecordingdelegate/fileoutput(_:didpauserecordingto:from:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">출력이 파일을 기록 중이고 클라이언트 요청으로 기록이 성공적으로 일시 정지될 때마다 호출됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[func fileOutput(AVCaptureFileOutput, didResumeRecordingTo: URL, from: [AVCaptureConnection])](avcapturefileoutputrecordingdelegate/fileoutput(_:didresumerecordingto:from:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">출력이 클라이언트의 요청에 따라 일시 정지된 파일 기록을 성공적으로 재개할 때마다 호출됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturefileoutputrecordingdelegate/fileoutput(_:willfinishrecordingto:from:error:">Apple Developer에서 보기</a>)*</span>
