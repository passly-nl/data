import { BaseResponse, BaseService, type ForeignData } from '@basmilius/http-client';
import { AiChatAdapter } from '#data/adapter';
import type { AiChatConversationDto, AiChatMessageDto } from '#data/dto';

export class MerchantAiChatService extends BaseService {
    async listConversations(merchantId: string): Promise<BaseResponse<AiChatConversationDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/ai-chat`)
            .method('get')
            .bearerToken()
            .runArrayAdapter(AiChatAdapter.parseConversation);
    }

    async createConversation(merchantId: string, title?: string | null): Promise<BaseResponse<AiChatConversationDto>> {
        return await this
            .request(`/merchants/${merchantId}/ai-chat`)
            .method('post')
            .bearerToken()
            .body({
                title: title ?? null
            })
            .runAdapter(AiChatAdapter.parseConversation);
    }

    async getMessages(merchantId: string, conversationId: string): Promise<BaseResponse<AiChatMessageDto[]>> {
        return await this
            .request(`/merchants/${merchantId}/ai-chat/${conversationId}/messages`)
            .method('get')
            .bearerToken()
            .runArrayAdapter(AiChatAdapter.parseMessage);
    }

    async postMessage(merchantId: string, conversationId: string, content: string): Promise<BaseResponse<{ userMessage: AiChatMessageDto }>> {
        return await this
            .request(`/merchants/${merchantId}/ai-chat/${conversationId}/messages`)
            .method('post')
            .bearerToken()
            .body({content})
            .runAdapter((data: ForeignData) => ({
                userMessage: AiChatAdapter.parseMessage(data.user_message)
            }));
    }

    async deleteConversation(merchantId: string, conversationId: string): Promise<BaseResponse<unknown>> {
        return await this
            .request(`/merchants/${merchantId}/ai-chat/${conversationId}`)
            .method('delete')
            .bearerToken()
            .run();
    }
}
